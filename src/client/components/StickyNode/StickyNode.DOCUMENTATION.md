### Synopsis

StickyNode is a React component which always will be inside a specified container.
It can be usefull for a tooltips, etc. 

 - [react-sticky-node](https://github.com/visortelle/react-sticky-node) - <StickyNode /> - Simplest React sticky component with all directions support and minimal API.
### Code Example

```
<StickyNode
  restrictorNode={_scope.state.ref}
>
  <div
    style={{
      minHeight: '50px',
      boxShadow: 'inset 0 0 0 6px rgba(0, 0, 0, 0.5)',
      padding: '12px',
      display: 'inline-flex',
      alignItems: 'center',
      whiteSpace: _scope.state.isNowrap ? 'nowrap' : 'normal'
    }}
  >
    <div>Change parent 'left' and 'bottom' properties to see result. </div>
    <div>This div will never outside of 'Restrictor'</div>
  </div>
</StickyNode>
```

### Props Reference

| Name                          | Type                  | Description                                                |
| ------------------------------|:----------------------| -----------------------------------------------------------|
| className | string | Default behaviour |
| style | object | Default behaviour |
| restrictorNode | object | Restrictor **DOMNode** or ReactElement **ref** |

### Contributors
Kirill Volkovich

[GIT REPOSITORY](http://buildserver.jcatalog.com/gitweb/?p=js-react-application-generator.git)

### Component Name

StickyNode
