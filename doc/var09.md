<!-- markdownlint-disable MD011 MD033 -->
[Grįžti](index.md) <!-- markdownlint-disable-line MD041 -->

# Variantas 9. Modifikuota Markdown sintaksė

<style type='text/css'>
  img{border:none}

  * {box-sizing: border-box;}

  body, div, p, table {
    font-size:10pt;
   }

  table {border-collapse:collapse; margin:0; font-family: monospace;}
  table.small {width:50%;}
  td, th {border: 1px solid black; vertical-align:top; padding: 0; margin: 0;}
  td.pad {padding: 1em;}
  div {margin: 1em;}
  caption {font-weight: bold;}
  .fourcol td, .fourecol th {width:25%;}
  pre, code { margin: 0; padding: 0; font-family: monospace;}
  code { white-space: pre; display: block;}
</style>

## Lentelė

Tekstas

```text
[& Table: Shoes sizes, materials, and colors.      &]
[~ Name         | Size | Material    | Color       ~]
[| All Business | 9    | leather     | brown       |]
[| Roundabout   | 10   | hemp canvas | natural     |]
[| Cinderella   | 11   | glass       | transparent |]
```

Rezultatas

<table>
  <caption>Table: Shoes sizes, materials, and colors.</caption>
  <thead>
    <tr>
      <th>Name</th>
      <th>Size</th>
      <th>Material</th>
      <th>Color</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>All Business</td>
      <td>9   </td>
      <td>leather    </td>
      <td>brown      </td>
    </tr>
    <tr>
      <td>Roundabout  </td>
      <td>10  </td>
      <td>hemp canvas</td>
      <td>natural    </td>
    </tr>
    <tr>
      <td>Cinderella  </td>
      <td>11  </td>
      <td>glass      </td>
      <td>transparent</td>
    </tr>
  </tbody>
</table>

## DDML paruoštukė

<!--
<table>
  <tr><th>Pilna lytis</th><td><code>|$element[value]</code></td></tr>
  <tr><th>Trumpoji lytis</th><td><code>$[value]</code></td></tr>
  <tr><th>Trumpoji lytis 2</th><td></td></tr>
  <tr><th>HTML</th><td><code>&lt;element&gt;value&lt;/element&gt;</code></td></tr>
  <tr><th>Išvedimas</th><td></td></tr>
</table>

<table>
  <tr><th>Pilna lytis</th><td><code>$element.. value\n\n</code></td></tr>
  <tr><th>Trumpoji lytis</th><td></td></tr>
  <tr><th>Trumpoji lytis 2</th><td></td></tr>
  <tr><th>HTML</th><td><code>&lt;element&gt;value&lt;/element&gt;</code></td></tr>
  <tr><th>Išvedimas</th><td></td></tr>
</table>

<table>
  <tr><th>Pilna lytis</th><td><code>$element.attribute(value)[...]</code></td></tr>
  <tr><th>Trumpoji lytis</th><td><code>$el{.attribute(value)}[...]</code></td></tr>
  <tr><th>Trumpoji lytis 2</th><td><code>[el{.attribute(value)}...]</code></td></tr>
  <tr><th>HTML</th><td><code>&lt;element attribute="value"&gt;...&lt;/element&gt;</code></td></tr>
  <tr><th>Išvedimas</th><td></td></tr>
</table>

<table>
  <tr><th>Pilna lytis</th><td><code>$element.attribute</code></td></tr>
  <tr><th>Trumpoji lytis</th><td><code>${.attribute}</code></td></tr>
  <tr><th>Trumpoji lytis 2</th><td><code>{.attribute}</code></td></tr>
  <tr><th>HTML</th><td><code>&lt;element attribute="true"&gt;&lt;/element&gt;</code></td></tr>
  <tr><th>Išvedimas</th><td></td></tr>
</table>

<table>
  <tr><th>Pilna lytis</th><td><code>$element{.attribute="value"}</code></td></tr>
  <tr><th>Trumpoji lytis</th><td><code>${.attribute="value"}</code></td></tr>
  <tr><th>Trumpoji lytis 2</th><td><code>{.attribute="value"}</code></td></tr>
  <tr><th>HTML</th><td><code>&lt;element attribute="value"&gt;&lt;/element&gt;</code></td></tr>
  <tr><th>Išvedimas</th><td></td></tr>
</table>

<table>
  <tr><th>Pilna lytis</th><td><code>$element#value</code></td></tr>
  <tr><th>Trumpoji lytis</th><td><code>${#value}</code></td></tr>
  <tr><th>Trumpoji lytis 2</th><td><code>{#value}</code></td></tr>
  <tr><th>HTML</th><td><code>&lt;element id="value"&gt;&lt;/element&gt;</code></td></tr>
  <tr><th>Išvedimas</th><td></td></tr>
</table>

<table>
  <tr><th>Pilna lytis</th><td><code>$element:value</code></td></tr>
  <tr><th>Trumpoji lytis</th><td><code>${:value}</code></td></tr>
  <tr><th>Trumpoji lytis 2</th><td><code>{:value}</code></td></tr>
  <tr><th>HTML</th><td><code>&lt;element class="value"&gt;&lt;/element&gt;</code></td></tr>
  <tr><th>Išvedimas</th><td></td></tr>
</table>

<table>
  <tr><th>Pilna lytis</th><td><code>$strong[strong]</code></td></tr>
  <tr><th>Trumpoji lytis</th><td><code>$*[strong]</code></td></tr>
  <tr><th>Trumpoji lytis 2</th><td><code>[*strong*]</code></td></tr>
  <tr><th>HTML</th><td><code>&lt;strong&gt;strong&lt;/strong&gt;</code></td></tr>
  <tr><th>Išvedimas</th><td><strong>strong</strong></td></tr>
</table>

<table>
  <tr><th>Pilna lytis</th><td><code>$em[emphasis]</code></td></tr>
  <tr><th>Trumpoji lytis</th><td><code>$/[emphasis]</code></td></tr>
  <tr><th>Trumpoji lytis 2</th><td><code>[/emphasis/]</code></td></tr>
  <tr><th>HTML</th><td><code>&lt;em&gt;emphasis&lt;/em&gt;</code></td></tr>
  <tr><th>Išvedimas</th><td><em>emphasis</em></td></tr>
</table>

<table>
  <tr><th>Pilna lytis</th><td><code>$del[deleted text]</code></td></tr>
  <tr><th>Trumpoji lytis</th><td><code>$-[deleted text]</code></td></tr>
  <tr><th>Trumpoji lytis 2</th><td><code>[-deleted text-]</code></td></tr>
  <tr><th>HTML</th><td><code>&lt;del&gt;deleted text&lt;/del&gt;</code></td></tr>
  <tr><th>Išvedimas</th><td><del>deleted text</del></td></tr>
</table>

<table>
  <tr><th>Pilna lytis</th><td><code>$ins[inserted text]</code></td></tr>
  <tr><th>Trumpoji lytis</th><td><code>$+[inserted text]</code></td></tr>
  <tr><th>Trumpoji lytis 2</th><td><code>[+inserted text+]</code></td></tr>
  <tr><th>HTML</th><td><code>&lt;ins&gt;inserted text&lt;/ins&gt;</code></td></tr>
  <tr><th>Išvedimas</th><td><ins>inserted text</ins></td></tr>
</table>

<table>
  <tr><th>Pilna lytis</th><td><code>$sup[superscript]</code></td></tr>
  <tr><th>Trumpoji lytis</th><td><code>$^[superscript]</code></td></tr>
  <tr><th>Trumpoji lytis 2</th><td><code>[^superscript^]</code></td></tr>
  <tr><th>HTML</th><td><code>&lt;sup&gt;superscript&lt;/sup&gt;</code></td></tr>
  <tr><th>Išvedimas</th><td><sup>superscript</sup></td></tr>
</table>

<table>
  <tr><th>Pilna lytis</th><td><code>$sub[subscript]</code></td></tr>
  <tr><th>Trumpoji lytis</th><td><code>$_[subscript]</code></td></tr>
  <tr><th>Trumpoji lytis 2</th><td><code>[_subscript_]</code></td></tr>
  <tr><th>HTML</th><td><code>&lt;sub&gt;subscript&lt;/sub&gt;</code></td></tr>
  <tr><th>Išvedimas</th><td><sub>subscript</sub></td></tr>
</table>

<table>
  <tr><th>Pilna lytis</th><td><code>$cite[citation]</code></td></tr>
  <tr><th>Trumpoji lytis</th><td><code>$?[citation]</code></td></tr>
  <tr><th>Trumpoji lytis 2</th><td><code>[?citation?]</code></td></tr>
  <tr><th>HTML</th><td><code>&lt;cite&gt;citation&lt;/cite&gt;</code></td></tr>
  <tr><th>Išvedimas</th><td><cite>citation</cite></td></tr>
</table>

<table>
  <tr><th>Pilna lytis</th><td><code>$span.color(green)[span]</code></td></tr>
  <tr><th>Trumpoji lytis</th><td><code>$%.color(green)[span]</code></td></tr>
  <tr><th>Trumpoji lytis 2</th><td><code>{.color(green)}[%span%]</code></td></tr>
  <tr><th>HTML</th><td><code>&lt;span style="color:green;"&gt;span&lt;/span&gt;</code></td></tr>
  <tr><th>Išvedimas</th><td><span style="color:green;">span</span></td></tr>
</table>

<table>
  <tr><th>Pilna lytis</th><td><code>$code[code]</code></td></tr>
  <tr><th>Trumpoji lytis</th><td><code>$@[code]</code></td></tr>
  <tr><th>Trumpoji lytis 2</th><td><code>[@code@]</code></td></tr>
  <tr><th>HTML</th><td><code>&lt;code&gt;code&lt;/code&gt;</code></td></tr>
  <tr><th>Išvedimas</th><td><code>code</code></td></tr>
</table>

<table>
  <tr><th>Pilna lytis</th><td><code>$link{.uri=path}[text]</code></td></tr>
  <tr><th>Trumpoji lytis</th><td><code>$=path[text]</code></td></tr>
  <tr><th>Trumpoji lytis 2</th><td><code>[[path|text]]</code></td></tr>
  <tr><th>HTML</th><td><code>&lt;a href="path"&gt;text&lt;/a&gt;</code></td></tr>
  <tr><th>Išvedimas</th><td><a href="path">text</a></td></tr>
</table>

<table>
  <tr>
    <th>Pilna lytis</th>
    <td><code>$caption[ Table caption       ]<br/>$hrow   [ Header 1 | Header 2 ]<br/>$row    [ Cell 1   | Cell 2   ]<br/>$row    [ Cell 3   | Cell 4   ]</code></td>
  </tr>
  <tr>
    <th>Trumpoji lytis</th>
    <td><code>$![ Table caption       ]<br/>$~[ Header 1 | Header 2 ]<br/>$|[ Cell 1   | Cell 2   ]<br/>$|[ Cell 3   | Cell 4   ]</code></td>
  </tr>
  <tr>
    <th>Trumpoji lytis 2</th>
    <td><code>[! Table caption       !]<br />[~ Header 1 | Header 2 ~]<br />[| Cell 1   | Cell 2   |]<br />[| Cell 3   | Cell 4   |]</code></td>
  </tr>
  <tr>
    <th>HTML</th>
    <td><code>&lt;table&gt;
&lt;caption&gt;Table caption&lt;/caption&gt;
&lt;tr&gt;
  &lt;th&gt;Header 1&lt;/th&gt;
  &lt;th&gt;Header 2&lt;/th&gt;
&lt;/tr&gt;
&lt;tr&gt;
  &lt;td&gt;Cell 1&lt;/td&gt;
  &lt;td&gt;Cell 2&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
  &lt;td&gt;Cell 3&lt;/td&gt;
  &lt;td&gt;Cell 4&lt;/td&gt;
&lt;/tr&gt;
&lt;/table&gt;</code>
    </td>
  </tr>
  <tr>
    <th>Išvedimas</th>
    <td>
      <table style="border-width: 0"><caption>Table caption</caption>
        <tr><th>Header 1</th><th>Header 2</th></tr>
        <tr><td>Cell 1</td><td>Cell 2</td></tr>
        <tr><td>Cell 3</td><td>Cell 4</td></tr>
      </table>
    </td>
  </tr>
</table>
-->

<table>
  <thead>
    <tr>
      <th>Pilna lytis</th>
      <th>Trumpoji lytis</th>
      <th>Trumpoji lytis 2</th>
      <th>HTML</th>
      <th>Išvedimas</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>$element[value]</code></td>
      <td><code>$el[value]</code></td>
      <td><code>[el value el]</code></td>
      <td><code>&lt;element&gt;value&lt;/element&gt;</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>$element.. value\n\n</code></td>
      <td></td>
      <td></td>
      <td><code>&lt;element&gt;value&lt;/element&gt;</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>$element.attribute(value)[]</code></td>
      <td><code>$el{.attribute(value)}[]</code></td>
      <td><code>{.attribute(value)}[el el]</code></td>
      <td><code>&lt;element attribute="value"&gt;&lt;/element&gt;</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>$element.attribute[]</code></td>
      <td><code>$el{.attribute}[]</code></td>
      <td><code>{.attribute}[el el]</code></td>
      <td><code>&lt;element attribute="true"&gt;&lt;/element&gt;</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>$element{.attribute="value"}[]</code></td>
      <td><code>$el{.attribute="value"}[]</code></td>
      <td><code>{.attribute="value"}[el el]</code></td>
      <td><code>&lt;element attribute="value"&gt;&lt;/element&gt;</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>$element#value[]</code></td>
      <td><code>$el{#value}[]</code></td>
      <td><code>{#value}[el el]</code></td>
      <td><code>&lt;element id="value"&gt;&lt;/element&gt;</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>$element@value[]</code></td>
      <td><code>$el{@value}[]</code></td>
      <td><code>{@value}[el el]</code></td>
      <td><code>&lt;element class="value"&gt;&lt;/element&gt;</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>$;[comment]</code></td>
      <td><code>$;[comment]</code></td>
      <td><code>[;comment;]</code></td>
      <td><code>&lt;!-- comment --&gt;</code></td>
      <td><!-- comment --></td>
    </tr>
    <tr>
      <td><code>$;; comment\n\n</code></td>
      <td></td>
      <td></td>
      <td><code>&lt;!-- comment --&gt;</code></td>
      <td><!-- comment --></td>
    </tr>    <tr>
      <td><code>$strong[strong]</code></td>
      <td><code>$![strong]</code></td>
      <td><code>[!strong!]</code></td>
      <td><code>&lt;strong&gt;strong&lt;/strong&gt;</code></td>
      <td><strong>strong</strong></td>
    </tr>
    <tr>
      <td><code>$em[emphasis]</code></td>
      <td><code>$/[emphasis]</code></td>
      <td><code>[/emphasis/]</code></td>
      <td><code>&lt;em&gt;emphasis&lt;/em&gt;</code></td>
      <td><em>emphasis</em></td>
    </tr>
    <tr>
      <td><code>$del[deleted text]</code></td>
      <td><code>$-[deleted text]</code></td>
      <td><code>[-deleted text-]</code></td>
      <td><code>&lt;del&gt;deleted text&lt;/del&gt;</code></td>
      <td><del>deleted text</del></td>
    </tr>
    <tr>
      <td><code>$ins[inserted text]</code></td>
      <td><code>$+[inserted text]</code></td>
      <td><code>[+inserted text+]</code></td>
      <td><code>&lt;ins&gt;inserted text&lt;/ins&gt;</code></td>
      <td><ins>inserted text</ins></td>
    </tr>
    <tr>
      <td><code>$sup[superscript]</code></td>
      <td><code>$^[superscript]</code></td>
      <td><code>[^superscript^]</code></td>
      <td><code>&lt;sup&gt;superscript&lt;/sup&gt;</code></td>
      <td><sup>superscript</sup></td>
    </tr>
    <tr>
      <td><code>$sub[subscript]</code></td>
      <td><code>$_[subscript]</code></td>
      <td><code>[_subscript_]</code></td>
      <td><code>&lt;sub&gt;subscript&lt;/sub&gt;</code></td>
      <td><sub>subscript</sub></td>
    </tr>
    <tr>
      <td><code>$span._color(green)[span]</code></td>
      <td><code>$%._color(green)[span]</code></td>
      <td><code>{._color(green)}[%span%]</code></td>
      <td><code>&lt;span style="color:green;"&gt;span&lt;/span&gt;</code></td>
      <td><span style="color:green;">span</span></td>
    </tr>
    <tr>
      <td><code>$li[text]</code></td>
      <td><code>$*[text]</code></td>
      <td><code>[*text*]</code></td>
      <td><code>&lt;li&gt;text&lt;/li&gt;</code></td>
      <td><ul><li>text</li></ul></td>
    </tr>
    <tr>
      <td><code>$li[text]</code></td>
      <td><code>$#[text]</code></td>
      <td><code>[#text#]</code></td>
      <td><code>&lt;li&gt;text&lt;/li&gt;</code></td>
      <td><ol><li>text</li></ol></td>
    </tr>
    <tr>
      <td><code>$cite[citation]</code></td>
      <td><code>$?[citation]</code></td>
      <td><code>[?citation?]</code></td>
      <td><code>&lt;cite&gt;citation&lt;/cite&gt;</code></td>
      <td><cite>citation</cite></td>
    </tr>
    <tr>
      <td><code>$code[code]</code></td>
      <td><code>$@[code]</code></td>
      <td><code>[@code@]</code></td>
      <td><code>&lt;code&gt;code&lt;/code&gt;</code></td>
      <td><code>code</code></td>
    </tr>
    <tr>
      <td><code>$link{.uri=path}[text]</code></td>
      <td><code>$=path[text]</code></td>
      <td><code>[[path|text]]</code></td>
      <td><code>&lt;a href="path"&gt;text&lt;/a&gt;</code></td>
      <td><a href="path">text</a></td>
    </tr>
    <tr>
      <td><code>$caption[Table caption    ]
$throw  [Header 1|Header 2]
$trow   [Cell 1  |Cell 2  ]
$trow   [Cell 3  |Cell 4  ]</code></td>
      <td><code>$&[Table caption    ]
$~[Header 1|Header 2]
$|[Cell 1  |Cell 2  ]
$|[Cell 3  |Cell 4  ]</code></td>
      <td><code>[& Table caption       &]
[~ Header 1 | Header 2 ~]
[| Cell 1   | Cell 2   |]
[| Cell 3   | Cell 4   |]</code></td>
      <td><code>&lt;table&gt;
  &lt;caption&gt;Table caption&lt;/caption&gt;
  &lt;tr&gt;
    &lt;th&gt;Header&nbsp;1&lt;/th&gt;
    &lt;th&gt;Header&nbsp;2&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Cell&nbsp;1&lt;/td&gt;
    &lt;td&gt;Cell&nbsp;2&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Cell&nbsp;3&lt;/td&gt;
    &lt;td&gt;Cell&nbsp;4&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</code>
      </td>
      <td>
        <table style="border-width: 0"><caption>Table caption</caption>
          <tr><th>Header&nbsp;1</th><th>Header&nbsp;2</th></tr>
          <tr><td>Cell 1</td><td>Cell 2</td></tr>
          <tr><td>Cell 3</td><td>Cell 4</td></tr>
        </table>
      </td>
    </tr>
  </tbody>
</table>

[Grįžti](index.md)
