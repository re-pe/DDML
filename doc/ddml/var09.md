<!-- markdownlint-disable MD011 MD033 MD041 -->
<style>
  html body code::before,
  html body code::after {
    content: "" !important;
  }

  html body code {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
</style>

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

<table>
  <thead>
    <tr>
      <th>Pilna lytis</th>
      <th>Trumpoji lytis</th>
      <th>HTML</th>
      <th>Išvedimas</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>$element[value]</code></td>
      <td><code>[el value el]</code></td>
      <td><code>&lt;element&gt;value&lt;/element&gt;</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>$element.. value\n\n</code></td>
      <td></td>
      <td><code>&lt;element&gt;value&lt;/element&gt;</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>$element.attribute(value)[]</code></td>
      <td><code>{.attribute(value)}[el el]</code></td>
      <td><code>&lt;element attribute="value"&gt;&lt;/element&gt;</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>$element.attribute[]</code></td>
      <td><code>{.attribute}[el el]</code></td>
      <td><code>&lt;element attribute="true"&gt;&lt;/element&gt;</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>$element{.attribute="value"}[]</code></td>
      <td><code>{.attribute="value"}[el el]</code></td>
      <td><code>&lt;element attribute="value"&gt;&lt;/element&gt;</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>$element#value[]</code></td>
      <td><code>{#value}[el el]</code></td>
      <td><code>&lt;element id="value"&gt;&lt;/element&gt;</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>$element@value[]</code></td>
      <td><code>{@value}[el el]</code></td>
      <td><code>&lt;element class="value"&gt;&lt;/element&gt;</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>$;[comment]</code></td>
      <td><code>[;comment;]</code></td>
      <td><code>&lt;!-- comment --&gt;</code></td>
      <td><!-- comment --></td>
    </tr>
    <tr>
      <td><code>$;; comment\n\n</code></td>
      <td></td>
      <td><code>&lt;!-- comment --&gt;</code></td>
      <td><!-- comment --></td>
    </tr>
    <tr>
      <td colspan="3" style="text-align:center">
        <strong>Eilutės elementai</strong>
      </td>
    </tr>
    <tr>
      <td><code>$strong[strong]</code></td>
      <td><code>[!strong!]</code></td>
      <td><code>&lt;strong&gt;strong&lt;/strong&gt;</code></td>
      <td><strong>strong</strong></td>
    </tr>
    <tr>
      <td><code>$em[emphasis]</code></td>
      <td><code>[/emphasis/]</code></td>
      <td><code>&lt;em&gt;emphasis&lt;/em&gt;</code></td>
      <td><em>emphasis</em></td>
    </tr>
    <tr>
      <td><code>$del[deleted text]</code></td>
      <td><code>[-deleted text-]</code></td>
      <td><code>&lt;del&gt;deleted text&lt;/del&gt;</code></td>
      <td><del>deleted text</del></td>
    </tr>
    <tr>
      <td><code>$ins[inserted text]</code></td>
      <td><code>[+inserted text+]</code></td>
      <td><code>&lt;ins&gt;inserted text&lt;/ins&gt;</code></td>
      <td><ins>inserted text</ins></td>
    </tr>
    <tr>
      <td><code>$sup[superscript]</code></td>
      <td><code>[^superscript^]</code></td>
      <td><code>&lt;sup&gt;superscript&lt;/sup&gt;</code></td>
      <td><sup>superscript</sup></td>
    </tr>
    <tr>
      <td><code>$sub[subscript]</code></td>
      <td><code>[_subscript_]</code></td>
      <td><code>&lt;sub&gt;subscript&lt;/sub&gt;</code></td>
      <td><sub>subscript</sub></td>
    </tr>
    <tr>
      <td><code>$span._color(green)[span]</code></td>
      <td><code>{._color="green"}[%span%]</code></td>
      <td><code>&lt;span style="color:green;"&gt;span&lt;/span&gt;</code></td>
      <td><span style="color:green;">span</span></td>
    </tr>
    <tr>
      <td><code>$marked[span]</code></td>
      <td><code>[=span=]</code></td>
      <td><code>&lt;span style="color:green;"&gt;span&lt;/span&gt;</code></td>
      <td><span style="color:green;">span</span></td>
    </tr>
    <tr>
      <td><code>$cite[citation]</code></td>
      <td><code>[?citation?]</code></td>
      <td><code>&lt;cite&gt;citation&lt;/cite&gt;</code></td>
      <td><cite>citation</cite></td>
    </tr>
    <tr>
      <td><code>$code[code]</code></td>
      <td><code>[@code@]</code></td>
      <td><code>&lt;code&gt;code&lt;/code&gt;</code></td>
      <td><code>code</code></td>
    </tr>
    <tr>
      <td colspan="3" style="text-align:center">
        <strong>Blokai</strong>
      </td>
    </tr>
    <tr>
      <td><code>$code{=js}[ kodas
      kodas
]</code></td>
      <td><code>[@@@]
      kodas
[/@@@]
</code></td>
      <td><code>&lt;code&gt;
      kodas
&lt;/code&gt;</code></td>
      <td><code>code</code></td>
    </tr>
    <tr>
      <td>
        <code>$defn{term="term"}: details\n\n</code>
        arba
        <code>$defn{term="term"}[details]</code>
      </td>
      <td><code>[:term|details:]</code></td>
      <td><code>&lt;dt&gt;term&lt;/dt&gt;&lt;dd&gt;details&lt;/dd&gt;</code></td>
      <td><dt>term</dt><dd>details</dd></td>
    </tr>
    <tr>
      <td><code>$li: text\n\n</code></td>
      <td><code>[*] text</code> or <code>[*text*]</code></td>
      <td><code>&lt;li&gt;text&lt;/li&gt;</code></td>
      <td><ul><li>text</li></ul></td>
    </tr>
    <tr>
      <td><code>$li: text\n\n</code></td>
      <td><code><code>[#:] text</code> or [#text#]</code></td>
      <td><code>&lt;li&gt;text&lt;/li&gt;</code></td>
      <td><ol><li>text</li></ol></td>
    </tr>
    <tr>
      <td><code>$bq: quotation</code></td>
      <td><code>[>quotation>]</code></td>
      <td><code>&lt;blockquote&gt;quotation&lt;/blockquote&gt;</code></td>
      <td><blockquote>quotation</blockquote></td>
    </tr>
    <tr>
      <td><code>$link{.uri=path}[Link name]</code></td>
      <td><code>[[path|Link name]]</code></td>
      <td><code>&lt;a href="path"&gt;Link name&lt;/a&gt;</code></td>
      <td><a href="">Link name</a></td>
    </tr>
    <tr>
      <td><code>$tcap  [   Table caption     ]
$throw [ Header 1 | Header 2 ]
$trow  [ Cell 1   | Cell 2   ]
$trow  [ Cell 3   | Cell 4   ]
$tfrow [ Footer 1 | Footer 2 ]</code></td>
      <td><code>      Table caption
[! Header 1 | Header 2 !]
[| Cell 1   | Cell 2   |]
[| Cell 3   | Cell 4   |]
[& Footer 1 | Footer 2 &]</code></td>
      <td><code>&lt;table&gt;
  &lt;caption&gt;Table caption&lt;/caption&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Header&nbsp;1&lt;/th&gt;
      &lt;th&gt;Header&nbsp;2&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;Cell&nbsp;1&lt;/td&gt;
      &lt;td&gt;Cell&nbsp;2&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;Cell&nbsp;3&lt;/td&gt;
      &lt;td&gt;Cell&nbsp;4&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
  &lt;tfoot&gt;
    &lt;tr&gt;
      &lt;td&gt;Footer&nbsp;1&lt;/td&gt;
      &lt;td&gt;Footer&nbsp;2&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tfoot&gt;
&lt;/table&gt;</code>
      </td>
      <td>
        <table style="border-width: 0">
          <caption>Table caption</caption>
          <thead>
            <tr><th>Header&nbsp;1</th><th>Header&nbsp;2</th></tr>
          </thead>
          <tbody>
            <tr><td>Cell&nbsp;1</td><td>Cell&nbsp;2</td></tr>
            <tr><td>Cell&nbsp;3</td><td>Cell&nbsp;4</td></tr>
          </tbody>
          <tfoot>
            <tr><td>Foooter&nbsp;1</td><td>Foooter&nbsp;2</td></tr>
          </tfoot>
        </table>
      </td>
    </tr>
    <tr>
      <td><code>$table [ Table caption
|! Header 1 |! Header 2 |
|  Cell 1   |  Cell 2   |
|  Cell 3   |  Cell 4   |
|& Footer 1 |& Footer 2 |]</code></td>
      <td><code>     Table caption
[|! Header 1 |! Header 2 |
 |  Cell 1   |  Cell 2   |
 |  Cell 3   |  Cell 4   |
 |& Footer 1 |& Footer 2 |]</code></td>
      <td><code>&lt;table&gt;
  &lt;caption&gt;Table caption&lt;/caption&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Header&nbsp;1&lt;/th&gt;
      &lt;th&gt;Header&nbsp;2&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;Cell&nbsp;1&lt;/td&gt;
      &lt;td&gt;Cell&nbsp;2&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;Cell&nbsp;3&lt;/td&gt;
      &lt;td&gt;Cell&nbsp;4&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
  &lt;tfoot&gt;
    &lt;tr&gt;
      &lt;td&gt;Footer&nbsp;1&lt;/td&gt;
      &lt;td&gt;Footer&nbsp;2&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tfoot&gt;
&lt;/table&gt;</code>
      </td>
      <td>
        <table style="border-width: 0">
          <caption>Table caption</caption>
          <thead>
            <tr><th>Header&nbsp;1</th><th>Header&nbsp;2</th></tr>
          </thead>
          <tbody>
            <tr><td>Cell&nbsp;1</td><td>Cell&nbsp;2</td></tr>
            <tr><td>Cell&nbsp;3</td><td>Cell&nbsp;4</td></tr>
          </tbody>
          <tfoot>
            <tr><td>Foooter&nbsp;1</td><td>Foooter&nbsp;2</td></tr>
          </tfoot>
        </table>
      </td>
    </tr>
  </tbody>
</table>

[Grįžti](index.md)
