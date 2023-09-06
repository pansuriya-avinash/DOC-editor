import React, { Component } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { test } from "../homePage/home";

export default class TinyMceEditor extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    console.log(e.target.getContent());
  }

  render() {
    return (
      <div>
        {/* <Global
          styles={css`
            .tox-notifications-container {
              display: none !important;
            }
          `}
        /> */}
        <Editor
          apiKey="0yxojcz5fwue6k3zon2s6cvrmsewb9bthaeeabcz6wng9odx"
          initialValue={test}
          tinymce-script-src="tinymce/tinymce.min.js"
          init={{
            branding: false,
            height: 1000,
            menubar: true,
             plugins:
               "print preview paste searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern",
           
             toolbar:
               "formatselect | bold italic underline strikethrough | forecolor backcolor blockquote | link image media | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat codeView",
            image_advtab: true,
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
          onChange={this.onChange}
          
        />
      </div>
    );
  }
}



