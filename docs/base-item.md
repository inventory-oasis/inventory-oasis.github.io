---
sidebar_label: 'Base Item'
sidebar_position: 3
---

import ItemInspector from './img/item_inspector.png';
import NewResource from './img/new_resource.png';
import ResourceMenu from './img/resource_menu.png';
import CraftParticle from './img/craft_particle.png';

# Base Item

Items in this inventory system are Godot resources. Base Item can be used as a base or just in general for your items.
It has some properties that are needed, you can always extend them. 

Here is an example with an apple. Apple uses the **ItConsumable** resource from the examples, which is inherited from **BaseItem**. This way we can set each item made with the **ItConsumable** resource how much health should add or remove from the Player and what audio it should play when eaten.

<img src={ItemInspector} alt="Screenshot of the Apple item in the inspector" width="400px" />

## Creating new simple items

- Right click in the filysystem and choose `New -> Resource...`

<img src={NewResource} alt="Screenshot of creating a new resource" width="400px" />

- Select **BaseItem** from the menu and click _Create_ and name it however you want. Good convention is to follow this `item_customname.tres`

<img src={ResourceMenu} alt="Screenshot of the resource menu" width="500px" />

- Double click it, and on the right side of the editor (the inspector), you should be able to edit it's properties

<img src={CraftParticle} alt="Screenshot of a basic item example" width="400px" />

To see what each property does, go to the [Property Descriptions](#property-descriptions)

## Extend item properties

To extend some items with more properties you can create a new script that _extends BaseItem_ and to create new properties just add export variables, here is an example:

```gdscript
class_name ItConsumable
extends BaseItem


@export var health := 0
@export var consume_audio: AudioStream
```

Now when creating a new item, from resources instead of clicking on **BaseItem**, choose the newly created resource, in this case it's **ItConsumable** (see the first line in the script we just made)

## Custom use action

Each item can have different functionality when interacting with it. This functionality can be set by attaching a script to the **File Use** property.

To create a custom action when an item is used you should create a new script that looks like this _(you can copy and paste this code or look at the addons/inventory_oasis/items/use/use_print.gd file)_:

```gdscript
extends ItemUse


func _i_use(item: BaseItem, interactor: Object) -> bool:
    # this will print the item name when used, you can remove this line
	print(item.i_name, " was used by ", interactor)

	# Add custom logic here...

	return super._i_use(item, interactor)
```

When you are done with the script, you can drag and drop it to the **File Use** property of the item. You can see some examples here:

- _res://examples/basic/inv/items/use/use_consumable.gd_
- _res://examples/game/inv/items/uses/useit_weapon.gd_

## Creating new advanced items

Let's try to make a Food item type and from it to make an Apple and a Mushroom.

First we have to think what properties a food item has, in this case they will be _health_ and _consume_audio_.

I will refer to the Food item type as Abstract Item, because multiple items can inherit from it.

Let's create a new script:
```gdscript title="abit_food.gd"
class_name AbItFood
extends BaseItem

@export var health := 0
@export var consume_audio: AudioStream
```

Because this script extends **BaseItem** (see second line), it will have every property that BaseItem has, plus the ones we added.

Now let's create an apple item:
- Right click in the filysystem and choose `New -> Resource...`
- Select **AbItFood** from the menu and click _Create_ and name it `item_apple.tres`
- Double click it, and on the right side of the editor (the inspector), you should be able to edit it's properties, notice that we now have **Health** and **Consume Audio** at the top which we can change.
- I will set the Health to a positive value: **5**

Now let's create a mushroom item:
- Right click in the filysystem and choose `New -> Resource...`
- Select **AbItFood** from the menu and click _Create_ and name it `item_mushroom.tres`
- Double click it, and on the right side of the editor (the inspector), you should be able to edit it's properties, notice that we now have **Health** and **Consume Audio** at the top which we can change.
- I will set the Health to a negative value: **-5**

If we try to use the items right now, we will only print their names, our Player health doesn't change, let's fix that! For this purpose we will need a new **ItemUse** script. Let's create it!:
```gdscript title="use_food.gd"
extends ItemUse

# this function should be named exactly like that, you can copy it from "Custom use action"
func _i_use(item: BaseItem, interactor: Object) -> bool:
	# check if the item has health property, because this file can be attached to any item
	if not &"health" in item:
		return false
	# check if the interactor, in this case the player has 'update_health' function which we can call
	if not interactor.has_method(&"update_health"):
		return false
	
	# Cast it to the abstract food item to access it's properties
	var item_cast = item as AbItFood
	
	interactor.update_health(item_cast.health)
	
	print(interactor, " got ", item_cast.health, " health.")
	
	if is_instance_valid(item_cast.consume_audio) && interactor.has_method(&"play_sound_fx"):
		interactor.play_sound_fx(item_cast.consume_audio)
	
	return true
```

- Now we can drag and drop this script to the **File Use** property. Notice that we can drag it to any item, even ones that do not have the `health` and `consume_audio` properties. That's why we had to check in the script if it had them.

If we use these items in the game now, the apple will give the player 5 health and play the consume_audio sound and the mushroom will deplete 5 health form the player and play the consume_audio sound.

## Property Descriptions

### _String i_name = ""_ {#prop-i-name}
Name of the item

### _Texture2D i_image_ {#prop-i-image}
Image of the item

### _String i_description = "..."_ {#prop-i-description}
Description of the item

### _bool i_consumable = true_ {#prop-i-consumable}
When using the item, should it be substracted or not (-1)

### _bool i_stackable = true_ {#prop-i-stackable}
Can the item be stacked

### _int i_maxstack = 5_ {#prop-i-maxstack}
If the item can be stacked, what is the max stack size

### _GDScript file_use = preload("use_print.gd")_ {#prop-file-use}
GDScript file that `extends ItemUse` and implements `func _i_use(item: BaseItem, interactor: Object) -> bool`

Whatever is inside the `_i_use` function will be called when using the item!

You can check _res://addons/inventory_oasis/items/use/use_print.gd_ for an example.
