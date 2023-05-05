"use strict";(self.webpackChunkinventory_oasis_github_io=self.webpackChunkinventory_oasis_github_io||[]).push([[926],{9613:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(9496);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(a),d=i,h=c["".concat(l,".").concat(d)]||c[d]||u[d]||r;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1483:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>g,frontMatter:()=>p,metadata:()=>c,toc:()=>d});var n=a(1163),i=(a(9496),a(9613));const r=a.p+"assets/images/item_inspector-253d2a150dae290e4c1ec36a55e9a929.png",o=a.p+"assets/images/new_resource-87d855afe0c7a3b6614c0493426db958.png",s=a.p+"assets/images/resource_menu-40792d125f08de4e12092731b91adb23.png",l=a.p+"assets/images/craft_particle-86a2c220b892fee4e83c3eec04554aca.png",p={sidebar_label:"Base Item",sidebar_position:3},m="Base Item",c={unversionedId:"base-item",id:"base-item",title:"Base Item",description:"Items in this inventory system are Godot resources. Base Item can be used as a base or just in general for your items.",source:"@site/docs/base-item.md",sourceDirName:".",slug:"/base-item",permalink:"/docs/base-item",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Base Item",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Inventory Component",permalink:"/docs/inv-component"},next:{title:"Inventory Window",permalink:"/docs/inv-window"}},u={},d=[{value:"Creating new simple items",id:"creating-new-simple-items",level:2},{value:"Extend item properties",id:"extend-item-properties",level:2},{value:"Custom use action",id:"custom-use-action",level:2},{value:"Creating new advanced items",id:"creating-new-advanced-items",level:2},{value:"Property Descriptions",id:"property-descriptions",level:2},{value:"<em>String i_name = &quot;&quot;</em>",id:"prop-i-name",level:3},{value:"<em>Texture2D i_image</em>",id:"prop-i-image",level:3},{value:"<em>String i_description = &quot;...&quot;</em>",id:"prop-i-description",level:3},{value:"<em>bool i_consumable = true</em>",id:"prop-i-consumable",level:3},{value:"<em>bool i_stackable = true</em>",id:"prop-i-stackable",level:3},{value:"<em>int i_maxstack = 5</em>",id:"prop-i-maxstack",level:3},{value:"<em>GDScript file_use = preload(&quot;use_print.gd&quot;)</em>",id:"prop-file-use",level:3}],h={toc:d},k="wrapper";function g(e){let{components:t,...a}=e;return(0,i.kt)(k,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"base-item"},"Base Item"),(0,i.kt)("p",null,"Items in this inventory system are Godot resources. Base Item can be used as a base or just in general for your items.\nIt has some properties that are needed, you can always extend them. "),(0,i.kt)("p",null,"Here is an example with an apple. Apple uses the ",(0,i.kt)("strong",{parentName:"p"},"ItConsumable")," resource from the examples, which is inherited from ",(0,i.kt)("strong",{parentName:"p"},"BaseItem"),". This way we can set each item made with the ",(0,i.kt)("strong",{parentName:"p"},"ItConsumable")," resource how much health should add or remove from the Player and what audio it should play when eaten."),(0,i.kt)("img",{src:r,alt:"Screenshot of the Apple item in the inspector",width:"400px"}),(0,i.kt)("h2",{id:"creating-new-simple-items"},"Creating new simple items"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Right click in the filysystem and choose ",(0,i.kt)("inlineCode",{parentName:"li"},"New -> Resource..."))),(0,i.kt)("img",{src:o,alt:"Screenshot of creating a new resource",width:"400px"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select ",(0,i.kt)("strong",{parentName:"li"},"BaseItem")," from the menu and click ",(0,i.kt)("em",{parentName:"li"},"Create")," and name it however you want. Good convention is to follow this ",(0,i.kt)("inlineCode",{parentName:"li"},"item_customname.tres"))),(0,i.kt)("img",{src:s,alt:"Screenshot of the resource menu",width:"500px"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Double click it, and on the right side of the editor (the inspector), you should be able to edit it's properties")),(0,i.kt)("img",{src:l,alt:"Screenshot of a basic item example",width:"400px"}),(0,i.kt)("p",null,"To see what each property does, go to the ",(0,i.kt)("a",{parentName:"p",href:"#property-descriptions"},"Property Descriptions")),(0,i.kt)("h2",{id:"extend-item-properties"},"Extend item properties"),(0,i.kt)("p",null,"To extend some items with more properties you can create a new script that ",(0,i.kt)("em",{parentName:"p"},"extends BaseItem")," and to create new properties just add export variables, here is an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gdscript"},"class_name ItConsumable\nextends BaseItem\n\n\n@export var health := 0\n@export var consume_audio: AudioStream\n")),(0,i.kt)("p",null,"Now when creating a new item, from resources instead of clicking on ",(0,i.kt)("strong",{parentName:"p"},"BaseItem"),", choose the newly created resource, in this case it's ",(0,i.kt)("strong",{parentName:"p"},"ItConsumable")," (see the first line in the script we just made)"),(0,i.kt)("h2",{id:"custom-use-action"},"Custom use action"),(0,i.kt)("p",null,"Each item can have different functionality when interacting with it. This functionality can be set by attaching a script to the ",(0,i.kt)("strong",{parentName:"p"},"File Use")," property."),(0,i.kt)("p",null,"To create a custom action when an item is used you should create a new script that looks like this ",(0,i.kt)("em",{parentName:"p"},"(you can copy and paste this code or look at the addons/inventory_oasis/items/use/use_print.gd file)"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gdscript"},'extends ItemUse\n\n\nfunc _i_use(item: BaseItem, interactor: Object) -> bool:\n    # this will print the item name when used, you can remove this line\n    print(item.i_name, " was used by ", interactor)\n\n    # Add custom logic here...\n\n    return super._i_use(item, interactor)\n')),(0,i.kt)("p",null,"When you are done with the script, you can drag and drop it to the ",(0,i.kt)("strong",{parentName:"p"},"File Use")," property of the item. You can see some examples here:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"res://examples/basic/inv/items/use/use_consumable.gd")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"res://examples/game/inv/items/uses/useit_weapon.gd"))),(0,i.kt)("h2",{id:"creating-new-advanced-items"},"Creating new advanced items"),(0,i.kt)("p",null,"Let's try to make a Food item type and from it to make an Apple and a Mushroom."),(0,i.kt)("p",null,"First we have to think what properties a food item has, in this case they will be ",(0,i.kt)("em",{parentName:"p"},"health")," and ",(0,i.kt)("em",{parentName:"p"},"consume_audio"),"."),(0,i.kt)("p",null,"I will refer to the Food item type as Abstract Item, because multiple items can inherit from it."),(0,i.kt)("p",null,"Let's create a new script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gdscript",metastring:'title="abit_food.gd"',title:'"abit_food.gd"'},"class_name AbItFood\nextends BaseItem\n\n@export var health := 0\n@export var consume_audio: AudioStream\n")),(0,i.kt)("p",null,"Because this script extends ",(0,i.kt)("strong",{parentName:"p"},"BaseItem")," (see second line), it will have every property that BaseItem has, plus the ones we added."),(0,i.kt)("p",null,"Now let's create an apple item:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Right click in the filysystem and choose ",(0,i.kt)("inlineCode",{parentName:"li"},"New -> Resource...")),(0,i.kt)("li",{parentName:"ul"},"Select ",(0,i.kt)("strong",{parentName:"li"},"AbItFood")," from the menu and click ",(0,i.kt)("em",{parentName:"li"},"Create")," and name it ",(0,i.kt)("inlineCode",{parentName:"li"},"item_apple.tres")),(0,i.kt)("li",{parentName:"ul"},"Double click it, and on the right side of the editor (the inspector), you should be able to edit it's properties, notice that we now have ",(0,i.kt)("strong",{parentName:"li"},"Health")," and ",(0,i.kt)("strong",{parentName:"li"},"Consume Audio")," at the top which we can change."),(0,i.kt)("li",{parentName:"ul"},"I will set the Health to a positive value: ",(0,i.kt)("strong",{parentName:"li"},"5"))),(0,i.kt)("p",null,"Now let's create a mushroom item:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Right click in the filysystem and choose ",(0,i.kt)("inlineCode",{parentName:"li"},"New -> Resource...")),(0,i.kt)("li",{parentName:"ul"},"Select ",(0,i.kt)("strong",{parentName:"li"},"AbItFood")," from the menu and click ",(0,i.kt)("em",{parentName:"li"},"Create")," and name it ",(0,i.kt)("inlineCode",{parentName:"li"},"item_mushroom.tres")),(0,i.kt)("li",{parentName:"ul"},"Double click it, and on the right side of the editor (the inspector), you should be able to edit it's properties, notice that we now have ",(0,i.kt)("strong",{parentName:"li"},"Health")," and ",(0,i.kt)("strong",{parentName:"li"},"Consume Audio")," at the top which we can change."),(0,i.kt)("li",{parentName:"ul"},"I will set the Health to a negative value: ",(0,i.kt)("strong",{parentName:"li"},"-5"))),(0,i.kt)("p",null,"If we try to use the items right now, we will only print their names, our Player health doesn't change, let's fix that! For this purpose we will need a new ",(0,i.kt)("strong",{parentName:"p"},"ItemUse")," script. Let's create it!:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gdscript",metastring:'title="use_food.gd"',title:'"use_food.gd"'},'extends ItemUse\n\n# this function should be named exactly like that, you can copy it from "Custom use action"\nfunc _i_use(item: BaseItem, interactor: Object) -> bool:\n    # check if the item has health property, because this file can be attached to any item\n    if not &"health" in item:\n        return false\n    # check if the interactor, in this case the player has \'update_health\' function which we can call\n    if not interactor.has_method(&"update_health"):\n        return false\n    \n    # Cast it to the abstract food item to access it\'s properties\n    var item_cast = item as AbItFood\n    \n    interactor.update_health(item_cast.health)\n    \n    print(interactor, " got ", item_cast.health, " health.")\n    \n    if is_instance_valid(item_cast.consume_audio) && interactor.has_method(&"play_sound_fx"):\n        interactor.play_sound_fx(item_cast.consume_audio)\n    \n    return true\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Now we can drag and drop this script to the ",(0,i.kt)("strong",{parentName:"li"},"File Use")," property. Notice that we can drag it to any item, even ones that do not have the ",(0,i.kt)("inlineCode",{parentName:"li"},"health")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"consume_audio")," properties. That's why we had to check in the script if it had them.")),(0,i.kt)("p",null,"If we use these items in the game now, the apple will give the player 5 health and play the consume_audio sound and the mushroom will deplete 5 health form the player and play the consume_audio sound."),(0,i.kt)("h2",{id:"property-descriptions"},"Property Descriptions"),(0,i.kt)("h3",{id:"prop-i-name"},(0,i.kt)("em",{parentName:"h3"},'String i_name = ""')),(0,i.kt)("p",null,"Name of the item"),(0,i.kt)("h3",{id:"prop-i-image"},(0,i.kt)("em",{parentName:"h3"},"Texture2D i_image")),(0,i.kt)("p",null,"Image of the item"),(0,i.kt)("h3",{id:"prop-i-description"},(0,i.kt)("em",{parentName:"h3"},'String i_description = "..."')),(0,i.kt)("p",null,"Description of the item"),(0,i.kt)("h3",{id:"prop-i-consumable"},(0,i.kt)("em",{parentName:"h3"},"bool i_consumable = true")),(0,i.kt)("p",null,"When using the item, should it be substracted or not (-1)"),(0,i.kt)("h3",{id:"prop-i-stackable"},(0,i.kt)("em",{parentName:"h3"},"bool i_stackable = true")),(0,i.kt)("p",null,"Can the item be stacked"),(0,i.kt)("h3",{id:"prop-i-maxstack"},(0,i.kt)("em",{parentName:"h3"},"int i_maxstack = 5")),(0,i.kt)("p",null,"If the item can be stacked, what is the max stack size"),(0,i.kt)("h3",{id:"prop-file-use"},(0,i.kt)("em",{parentName:"h3"},'GDScript file_use = preload("use_print.gd")')),(0,i.kt)("p",null,"GDScript file that ",(0,i.kt)("inlineCode",{parentName:"p"},"extends ItemUse")," and implements ",(0,i.kt)("inlineCode",{parentName:"p"},"func _i_use(item: BaseItem, interactor: Object) -> bool")),(0,i.kt)("p",null,"Whatever is inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"_i_use")," function will be called when using the item!"),(0,i.kt)("p",null,"You can check ",(0,i.kt)("em",{parentName:"p"},"res://addons/inventory_oasis/items/use/use_print.gd")," for an example."))}g.isMDXComponent=!0}}]);