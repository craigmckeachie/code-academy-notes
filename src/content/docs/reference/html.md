---
title: HTML
---

### Angle Brackets

```html
< > <!--opening tag-->
</ > <!--closing tag-->
```

### HTML Element

```html
<p>This is a paragraph</p>
```

### HTML Attribute

A paragraph that is uses a fancy font and is named "introduction".
Both id and class are attributes.

```html
<p id="introduction" class="fancy">This is a paragraph</p>
```

Both `id` and `href` are attributes. An `id` attribute can exist on every element while and `href` is specific to an anchor tag (link).

```html
<a id="productsLink" href="products.html">Products</a>
```

## HTML Elements (common)

### Paragraph

```html
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, dicta.</p>
```

### Image

```html
<img src="images/dog.jpg" alt="labrador" />
```

### Anchor (Link)

```html
<a href="index.html">Home</a>
```

### Table

Simple table with no `thead` or `tbody`

```html
<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>
```

Complete example WITH `thead` and `tbody`

```html
<table>
  <thead>
    <tr>
      <th>Company</th>
      <th>Contact</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
    <tr>
      <td>Centro comercial Moctezuma</td>
      <td>Francisco Chang</td>
      <td>Mexico</td>
    </tr>
  </tbody>
</table>
```

### Input(s)

```html
<!-- text -->
<label for="firstNameInput">First Name</label>
<input
  type="text"
  id="firstNameInput"
  placeholder="enter first name"
  value="Craig"
/>

<!-- checkbox -->
<input type="checkbox" id="isActiveCheckbox" checked />
<label for="isActiveCheckbox">Is Active?</label>

<!-- radiobutton group -->
<fieldset>
  <legend>Over 21?</legend>
  <input type="radio" name="over21Radio" id="over21RadioYes" />
  <label for="over21RadioYes">Yes</label>
  <input type="radio" name="over21Radio" id="over21RadioNo" />
  <label for="over21RadioNo">No</label>
</fieldset>
```

### Dropdown (select)

```html
<label for="animalDropdown">Animal</label>
<select id="animalDropdown">
  <option value="">Select...</option>
  <option value="1">Dog</option>
  <option value="2">Cat</option>
  <option value="3">Mouse</option>
  <option value="4">Rat</option>
</select>
```
