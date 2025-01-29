import {step} from '../../core/fixtures/base-fixture';
import {getLocator} from "../../core/utils/locator-utils";
import {getPage} from "../../core/utils/page-utils";
import {ButtonElement} from "../components/ui-elements/button-element";

export class HomePage {

    static logInButton = () => new ButtonElement(getLocator('#signin'));

    @step("Open application url")
    static async openPage() {
        await getPage().goto("/");
    }

    @step("Click 'Log in' button")
    static async clickLogInButton() {
        await HomePage.logInButton().click();
    }
}
