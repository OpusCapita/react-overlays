### Component Name

ElementRectWatcher

### Synopsis

Component to easy handle element size and position changes.
It can be usefull to make something like media queries but based on element container size instead of not on screen size.

### Code Example

```
<ElementRectWatcher
  onChange={(nextRect) => console.log(nextRect)}
>
  <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </div>
</ElementRectWatcher>
```

### Props Reference

| Name                          | Type                  | Description                                                |
| ------------------------------|:----------------------| -----------------------------------------------------------|
| onChange | callback | (nextRect) => {} |
