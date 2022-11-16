<!-- markdownlint-disable-next-line MD041 -->
[Grįžti](../index.md)

# JsonML

Tagai JsonML'e visada perteikiami tik masyvais.

```xml
<!-- XML representation of a person record -->
<person created="2006-11-11T19:23" modified="2006-12-31T23:59">
    <firstName>Robert</firstName>
    <lastName>Smith</lastName>
    <address type="home">
        <street>12345 Sixth Ave</street>
        <city>Anytown</city>
        <state>CA</state>
        <postalCode>98765-4321</postalCode>
    </address>
</person>
```

```json
["person",
  {"created":"2006-11-11T19:23",
   "modified":"2006-12-31T23:59"},
  ["firstName", "Robert"],
  ["lastName", "Smith"],
  ["address", {"type":"home"},
    ["street", "12345 Sixth Ave"],
    ["city", "Anytown"],
    ["state", "CA"],
    ["postalCode", "98765-4321"]
  ]
]
```

[Grįžti](../index.md)
