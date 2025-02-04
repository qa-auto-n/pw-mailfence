import {SideBarElement} from '../components/layout-elements/side-bar-element';
import {TabActionBarElement} from '../components/layout-elements/tab-action-bar-element';
import {getOrCreate} from '../../core/utils/init-utils';
import {HeaderElement} from '../components/layout-elements/header-bar-element';
import {DialogElement} from '../components/layout-elements/dialog-element';

export abstract class ComponentsPage {
    private static _header: HeaderElement | null = null;
    private static _sideBar: SideBarElement | null = null;
    private static _tabActionBar: TabActionBarElement | null = null;
    private static _saveDialog: DialogElement | null = null;

    public static get header(): HeaderElement {
        return getOrCreate(this._header, HeaderElement.getHeader);
    }

    public static get sideBar(): SideBarElement {
        return getOrCreate(this._sideBar, SideBarElement.getSideBar);
    }

    public static get tabActionBar(): TabActionBarElement {
        return getOrCreate(this._tabActionBar, TabActionBarElement.getTabActionBar);
    }

    public static get saveDialog(): DialogElement {
        return getOrCreate(this._saveDialog, DialogElement.getSaveDialog);
    }
}
