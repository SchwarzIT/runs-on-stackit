/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface StackitBadge {
        /**
          * Define which badge color to use. yellow = yellow color badge petrol = petrol color badge
         */
        "badgeColor": "petrol" | "white" | "yellow";
        /**
          * To use runs-on-stackit-badge or runson = Runs On badge poweredby = Powered By color badge
         */
        "badgeType": "badge" | "ribbon" | "flag";
        "badgeWidth": any;
        /**
          * To use cd instead local assets
         */
        "cdn": boolean;
        /**
          * To use runs-on or powered-by badge runson = Runs On badge poweredby = Powered By color badge
         */
        "hostingType": "runson" | "poweredby";
    }
}
declare global {
    interface HTMLStackitBadgeElement extends Components.StackitBadge, HTMLStencilElement {
    }
    var HTMLStackitBadgeElement: {
        prototype: HTMLStackitBadgeElement;
        new (): HTMLStackitBadgeElement;
    };
    interface HTMLElementTagNameMap {
        "stackit-badge": HTMLStackitBadgeElement;
    }
}
declare namespace LocalJSX {
    interface StackitBadge {
        /**
          * Define which badge color to use. yellow = yellow color badge petrol = petrol color badge
         */
        "badgeColor"?: "petrol" | "white" | "yellow";
        /**
          * To use runs-on-stackit-badge or runson = Runs On badge poweredby = Powered By color badge
         */
        "badgeType"?: "badge" | "ribbon" | "flag";
        "badgeWidth"?: any;
        /**
          * To use cd instead local assets
         */
        "cdn"?: boolean;
        /**
          * To use runs-on or powered-by badge runson = Runs On badge poweredby = Powered By color badge
         */
        "hostingType"?: "runson" | "poweredby";
    }
    interface IntrinsicElements {
        "stackit-badge": StackitBadge;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "stackit-badge": LocalJSX.StackitBadge & JSXBase.HTMLAttributes<HTMLStackitBadgeElement>;
        }
    }
}