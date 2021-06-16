//***KKK***15.04.2016

/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="bootstrap.d.ts"/>

declare module bootboxt {

    interface DialogOptions {
        /**
        * Text (or markup) displayed in the dialog.
        */
        message: string | HTMLElement;

        /**
        * Adds a header to the dialog and places this text (or markup) in an <h4> element.
        */
        title?: string | HTMLElement;

        /** 
        * The locale settings used to translate the three standard button labels: OK, CONFIRM, CANCEL
        */
        locale?: string;

        /**
        * Alerts do not require a callback.
          An alert callback should not supply an argument; 
          Confirm and prompt callbacks must supply an argument for the result; 
          for confirm, it will be a true or false value, while the prompt result will hold the value entered by the user
        */
        callback?: any;

        /**
        * Allows the user to dismiss the dialog by hitting ESC, which will invoke this function. Default: true for alert, confirm, and prompt; null for custom dialogs.
        */
        onEscape?: boolean |  any;
       
        /**
        * Whether the dialog should be shown immediately. Default: true
        */
        show?: boolean;

        /**
        * Whether the dialog should be have a backdrop or not. 
          Also determines whether clicking on the backdrop dismisses the modal.
        */
        backdrop?: boolean;

        /**
        * Whether the dialog should have a close button or not. Default: true
        */
        closeButton?: boolean;

        /**
        *  Animate the dialog in and out (requires a browser which supports CSS animations). Default: true
        */
        animate?: boolean;

        /**
        *  An additional class to apply to the dialog wrapper. Default: null
        */
        className?: string;

        /**
        *  Adds the relevant Bootstrap modal size class to the dialog wrapper. Valid values are 'large' and 'small'
        */
        size?: string;

        /**
        * Buttons are defined as JavaScript objects. 
        */
        buttons?: any;
    }

}

declare module bootbox {

    function alert(option: any): void;

    function confirm(option: any): void;

    function prompt(option: any): void;

    function dialog(option: bootboxt.DialogOptions): void;

    function init(func: () => any): void;

    function setDefaults(option?: any): void;

    function addLocale(name: string, values: any): void;

    function removeLocale(name: string): void;

    function setLocale(name: string): void;

    function hideAll(option?: any): void;

}

declare module "bootbox" {
    export = bootbox;
}
