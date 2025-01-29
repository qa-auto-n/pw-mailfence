import {getLocatorByPlaceholder, getLocatorByRole} from '../../core/utils/locator-utils';
import {InputElement} from '../components/ui-elements/input-element';
import {ButtonElement} from '../components/ui-elements/button-element';
import {step} from '../../core/utils/decorators/step-decorator';

export class LoginPage {

    static userNameField = () => new InputElement(getLocatorByPlaceholder('Username / Email address'));
    static passwordField = () => new InputElement(getLocatorByPlaceholder('Password'));
    static submitButton = () => new ButtonElement(getLocatorByRole('button', {name: 'Enter'}));

    @step('Fill in log in form a nd submit')
    static async fillInLogInFormAndSubmit(username: string, password: string) {
        await LoginPage.userNameField().fill(username);
        await LoginPage.passwordField().fill(password);
        await LoginPage.submitButton().click();
    }
}
