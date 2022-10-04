import { Injectable } from '@angular/core';
import { isNil, Nil } from '@utils/types/nil';
import { RouterLink } from '@routing/types/router-link';
import { MenuItemCommand } from '../types/menu-item-command';
import { MenuItem } from '../models/menu-item';
import { MenuItemType } from '../enums/menu-item-type';
import { RequiredMethodCallException } from '@core/exceptions/required-method-call-exception';
import { Observable, of } from 'rxjs';
import { Icon } from '@core/assets/icons/enums/icon';

@Injectable({
  providedIn: 'root',
})
export class MenuItemBuilderService {
  private _label: Nil<string>;
  private _type: Nil<MenuItemType>;
  private _routerLink: Nil<RouterLink>;
  private _link: Nil<string>;
  private _command: Nil<MenuItemCommand>;
  private _children: Nil<MenuItem[]>;
  private _visible$: Nil<Observable<boolean>>;
  private _icon: Nil<Icon>;

  newInstance(): MenuItemBuilderService {
    return new MenuItemBuilderService();
  }

  from(item: MenuItem): MenuItemBuilderService {
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

  initMore(factory: (builder: MenuItemBuilderService) => MenuItem[]): this {
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

  children(factory: (builder: MenuItemBuilderService) => MenuItem[]): this {
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
    if (!isNil(this._type)) {
      return;
    }

    this.type(MenuItemType.ROUTER_LINK);
  }

  private configureDefaultVisible(): void {
    if (!isNil(this._visible$)) {
      return;
    }

    this.visible(of(true));
  }

  private requireType(): void {
    if (!isNil(this._type)) {
      return;
    }

    throw new RequiredMethodCallException('type');
  }

  private requireRouterLink(): void {
    if (!isNil(this._routerLink)) {
      return;
    }

    throw new RequiredMethodCallException('routerLink');
  }

  private requireCommand(): void {
    if (!isNil(this._command)) {
      return;
    }

    throw new RequiredMethodCallException('command');
  }

  private requireLink(): void {
    if (!isNil(this._link)) {
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
