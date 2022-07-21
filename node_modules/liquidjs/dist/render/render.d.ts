/// <reference types="node" />
import { Context } from '../context/context';
import { Template } from '../template/template';
import { Emitter } from '../emitters/emitter';
export declare class Render {
    renderTemplatesToNodeStream(templates: Template[], ctx: Context): NodeJS.ReadableStream;
    renderTemplates(templates: Template[], ctx: Context, emitter?: Emitter): IterableIterator<any>;
}
