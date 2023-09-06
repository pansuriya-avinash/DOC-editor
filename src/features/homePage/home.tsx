import { Button, Card, Input, Row } from "antd";
import React, { useRef, useState } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";


const MySunEditor = () => {

    return (
      <Card className="m-10">

        <SunEditor
          setDefaultStyle="height: auto"
          setContents={test}
          setOptions={{
            buttonList: [
              ["font", "fontSize", "formatBlock"],
              [
                "bold",
                "underline",
                "italic",
                "strike",
                "subscript",
                "superscript"
              ],
              ["align", "horizontalRule", "list", "table"],
              ["fontColor", "hiliteColor"],
              ["outdent", "indent"],
              ["undo", "redo"],
              ["removeFormat"],
              ["outdent", "indent"],
              ["link", "image"],
              ["preview", "print"],
              ["fullScreen", "showBlocks", "codeView"]
            ]
          }}
        />

      </Card>
    );
};
export default MySunEditor;


export const test = ` <table style="width: 100%;">
<tbody>
<tr>
<td>
<div><strong>Subject :</strong> Subject Name</div>
</td>
</tr>
<tr>
<td>
<div><strong>Date :</strong> 01st January 2000</div>
</td>
</tr>
<tr>
<td>
<div><strong>Time :</strong> 11:00 am to 11:30 am (IST) , 07:30 to 08:00 AM (CET)</div>
</td>
</tr>
<tr>
<td>
<div><strong>Participants:</strong>
<ul>
<li>Participants 1</li>
<li>Participants 2</li>
<li>Participants 3</li>
<li>Participants 4</li>
</ul>
</div>
</td>
</tr>
</tbody>
</table>
<p><strong>Agenda :<br></strong></p>
<ol>
<li>Agenda -1</li>
<li>Agenda:-2</li>
<li>Agenda:-3</li>
<li>Agenda:-4</li>
</ol>
<ol>
<li><strong>Review the initial expectations set in the month&nbsp:<br></strong>
<ul>
<li>Review-1</li>
<li>Review-2</li>
<li>Review-3</li>
<li>Review-4</li>
</ul>
</li>
<li><strong>Resource Planning:<br></strong>
<ul>
<li>Resource-1</li>
<li>Resource-2</li>
<li>Resource-3</li>
<li>Resource-4</li>
</ul>
</li>
<li><strong>Project Planning :</strong><br>Step 1 -<br>Step 2 -&nbsp;<br>Step 3 -&nbsp;<br>Step 4 -&nbsp;<br>Step 5 -&nbsp;</li>
</ol>
<p><strong>Action-items:</strong></p>
<table style="border-collapse: collapse; width: 100%; height: 89.5624px;" border="1"><colgroup><col style="width: 3.84615%;"><col style="width: 74.2968%;"><col style="width: 21.857%;"></colgroup>
<tbody>
<tr style="height: 22.3906px;">
<td style="text-align: center; height: 22.3906px;"><strong>#</strong></td>
<td style="text-align: center; height: 22.3906px;"><strong>Work-item</strong></td>
<td style="text-align: center; height: 22.3906px;"><strong>Ownership</strong></td>
</tr>
<tr style="height: 22.3906px;">
<td style="height: 22.3906px;">1</td>
<td style="height: 22.3906px;">item-1</td>
<td style="height: 22.3906px;">Owner-1</td>
</tr>
<tr style="height: 22.3906px;">
<td style="height: 22.3906px;">2</td>
<td style="height: 22.3906px;">item-2</td>
<td style="height: 22.3906px;">Owner-2</td>
</tr>
<tr style="height: 22.3906px;">
<td style="height: 22.3906px;">3</td>
<td style="height: 22.3906px;">item-3</td>
<td style="height: 22.3906px;">Owner-3</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
`;
