import { Component, Disposable, Event, FragmentIdMap, UI, UIElement } from "../../base-types";
import { FragmentTreeItem } from "./src/tree-item";
import { Components } from "../../core";
import { Button, FloatingWindow } from "../../ui";
export declare class FragmentTree extends Component<FragmentTreeItem> implements UI, Disposable {
    static readonly uuid: "5af6ebe1-26fc-4053-936a-801b6c7cb37e";
    /** {@link Disposable.onDisposed} */
    readonly onDisposed: Event<string>;
    enabled: boolean;
    onSelected: Event<{
        items: FragmentIdMap;
        visible: boolean;
    }>;
    onHovered: Event<{
        items: FragmentIdMap;
        visible: boolean;
    }>;
    private _title;
    private _tree?;
    uiElement: UIElement<{
        main: Button;
        window: FloatingWindow;
    }>;
    constructor(components: Components);
    get(): FragmentTreeItem;
    init(): void;
    dispose(): Promise<void>;
    update(groupSystems: string[]): Promise<void>;
    private setupUI;
    private regenerate;
}
