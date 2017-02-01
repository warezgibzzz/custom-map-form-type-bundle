# CustomMapFormTypeBundle

Set the latitude and longitude using Custom Map

## Installation

Add warezgibzzz/custom-map-form-type-bundle to your `composer.json` file and run `composer`

```json
...
"require": {
    "warezgibzzz/custom-map-form-type-bundle": "dev-master"
}
...
```

Register the bundle in your `AppKernel.php`

```php
...
new Warezgibzzz\CustomMapFormTypeBundle\WarezgibzzzCustomMapFormTypeBundle(),
...
```

Include bundle's scripts in your page:

```html
...
<script src="{{ asset('bundles/warezgibzzzcustommapformtype/js/imgViewer.min.js') }}"></script>
<script src="{{ asset('bundles/warezgibzzzcustommapformtype/js/imgNotes.min.js') }}"></script>
<script src="{{ asset('bundles/warezgibzzzcustommapformtype/js/custom_map_widget.js') }}"></script>
...
```

## Usage

Just set the `custom_map` FormType for your field as follows:

```php
...
    ->add('coordinates', 'custom_map')
...
```

The type takes and returns an array with items `lat` for the latitude and `lng` for the longitude. So you need to
configure your database coordinates column as `OBJECT` or create the setter and getter for it on your model.

## Options

There are a few options that you can pass:

```php
...
    ->add('coordinates', 'custom_map', array(
        'width'      => 640,      // The map's width
        'height'     => 480,      // The map's height
        'default'    => array(
            'x' => 5, // The default latitude value
            'y' => 6 // The default longitude value
        ),
        'parameters' => array(
            'image' => 'http://placehold.it/640x480', // The map image
        )
    ))
...
```

## Configuration

You can configure default values for type's options to avoid passing them every time:

```yml
...
warezgibzzz_custom_map_form_type:
    size:
        width:  640
        height: 480
    default:
        x: 5
        y: 6
    parameters:
        image: 'custom#map'
...
```
