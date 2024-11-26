'use client';

/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 */

/* eslint-disable */

import type { StencilReactComponent } from '@stencil/react-output-target/runtime';
import { createComponent } from '@stencil/react-output-target/runtime';
import { DomComponent as DomComponentElement, defineCustomElement as defineDomComponent } from "@test/stencil-components/dist/components/dom-component.js";
import { ShadowComponent as ShadowComponentElement, defineCustomElement as defineShadowComponent } from "@test/stencil-components/dist/components/shadow-component.js";
import React from 'react';

type DomComponentEvents = NonNullable<unknown>;

export const DomComponent: StencilReactComponent<DomComponentElement, DomComponentEvents> = /*@__PURE__*/ createComponent<DomComponentElement, DomComponentEvents>({
    tagName: 'dom-component',
    elementClass: DomComponentElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as DomComponentEvents,
    defineCustomElement: defineDomComponent
});

type ShadowComponentEvents = NonNullable<unknown>;

export const ShadowComponent: StencilReactComponent<ShadowComponentElement, ShadowComponentEvents> = /*@__PURE__*/ createComponent<ShadowComponentElement, ShadowComponentEvents>({
    tagName: 'shadow-component',
    elementClass: ShadowComponentElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as ShadowComponentEvents,
    defineCustomElement: defineShadowComponent
});