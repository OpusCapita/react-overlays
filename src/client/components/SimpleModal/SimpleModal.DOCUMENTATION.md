### Component Name

SimpleModal

### Code Example

```
<div
  style={{
    alignItems: 'center',
    border: '1px solid rgba(0, 0, 0, 0.08)',
    display: 'flex',
    fontSize: '24px',
    height: '480px',
    justifyContent: 'center',
    maxWidth: '640px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden'
  }}
>
  <div>
    PARENT CONTAINER CONTENT
  </div>
  <SimpleModal
    isShow={_scope.state.isShowModal}
    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
  >
    <div
      style={{ padding: '24px', backgroundColor: '#fff' }}
    >
      MODAL CONTENT
    </div>
  </SimpleModal>
</div>
```

### Props Reference

| Name                          | Type                  | Description                                                |
| ------------------------------|:----------------------| -----------------------------------------------------------|
| demoProp | string | Write a description of the property |
