import { Injectable } from '@angular/core';
import { Nullable } from '@util/type/nullable/nullable';
import { isNullable } from '@util/type/nullable/is-nullable';
import { MenuItemCommand } from '../type/menu-item-command';
import { MenuItem } from '../model/menu-item';
import { MenuItemType } from '../enum/menu-item-type';
import { RequiredMethodCallException } from '@core/exception/required-method-call-exception';
import { Observable, of } from 'rxjs';
import { RouterLink } from '@core/routing/type/router-link';
import { Icon } from '@core/asset/icon/enum/icon';

@Injectable({
  providedIn: 'root',
})
export class MenuItemBuilder {
  private _label: Nullable<string>;
  private _type: Nullable<MenuItemType>;
  private _routerLink: Nullable<RouterLink>;
  private _link: Nullable<string>;
  private _command: Nullable<MenuItemCommand>;
  private _children: Nullable<MenuItem[]>;
  private _visible$: Nullable<Observable<boolean>>;
  private _icon: Nullable<Icon>;

  newInstance(): MenuItemBuilder {
    return new MenuItemBuilder();
  }

  from(item: MenuItem): MenuItemBuilder {
    const builder = this.newInstance();

    builder._label = item.label;
    builder._type = item.type;
    builder._routerLink = item.routerLink;
    builder._link = item.link;
    builder._command = item.command;
    builder._children = item.children;
    builder._visible$ = item.visibility$;
    builder._icon = item.icon;

    return builder;
  }

  reset(): this {
    this._label = null;
    this._type = null;
    this._routerLink = null;
    this._link = null;
    this._command = null;
    this._children = null;
    this._visible$ = null;
    this._icon = null;

    return this;
  }

  initLink(factory: () => string): this {
    return this.type(MenuItemType.LINK).link(factory);
  }

  initRouterLink(factory: () => RouterLink): this {
    return this.type(MenuItemType.ROUTER_LINK).routerLink(factory);
  }

  initMore(factory: (builder: MenuItemBuilder) => MenuItem[]): this {
    return this.type(MenuItemType.MORE).children(factory);
  }

  initCommand(factory: () => MenuItemCommand): this {
    return this.type(MenuItemType.COMMAND).command(factory);
  }

  label(label: string): this {
    this._label = label;

    return this;
  }

  icon(icon: Icon): this {
    this._icon = icon;

    return this;
  }

  type(type: MenuItemType): this {
    this._type = type;

    return this;
  }

  command(factory: () => MenuItemCommand): this {
    this._command = factory();

    return this;
  }

  routerLink(factory: () => RouterLink): this {
    this._routerLink = factory();

    return this;
  }

  link(factory: () => string): this {
    this._link = factory();

    return this;
  }

  children(factory: (builder: MenuItemBuilder) => MenuItem[]): this {
    this._children = factory(this.newInstance());

    return this.type(MenuItemType.MORE);
  }

  visible(visible$: Observable<boolean>): this {
    this._visible$ = visible$;

    return this;
  }

  build(): MenuItem {
    this.configureDefaultType();
    this.configureDefaultVisible();

    this.requireType();

    if (this.isRouterLinkType()) {
      this.requireRouterLink();
    }

    if (this.isCommandType()) {
      this.requireCommand();
    }

    if (this.isLinkType()) {
      this.requireLink();
    }

    const item = new MenuItem(
      this._visible$!,
      this._label!,
      this._type!,
      this._routerLink,
      this._link,
      this._command,
      this._children,
      this._icon,
    );

    this.reset();

    return item;
  }

  private configureDefaultType(): void {
    if (!isNullable(this._type)) {
      return;
    }

    this.type(MenuItemType.ROUTER_LINK);
  }

  private configureDefaultVisible(): void {
    if (!isNullable(this._visible$)) {
      return;
    }

    this.visible(of(true));
  }

  private requireType(): void {
    if (!isNullable(this._type)) {
      return;
    }

    throw new RequiredMethodCallException('type');
  }

  private requireRouterLink(): void {
    if (!isNullable(this._routerLink)) {
      return;
    }

    throw new RequiredMethodCallException('routerLink');
  }

  private requireCommand(): void {
    if (!isNullable(this._command)) {
      return;
    }

    throw new RequiredMethodCallException('command');
  }

  private requireLink(): void {
    if (!isNullable(this._link)) {
      return;
    }

    throw new RequiredMethodCallException('link');
  }

  private isRouterLinkType(): boolean {
    return this._type === MenuItemType.ROUTER_LINK;
  }

  private isCommandType(): boolean {
    return this._type === MenuItemType.COMMAND;
  }

  private isLinkType(): boolean {
    return this._type === MenuItemType.LINK;
  }
}
