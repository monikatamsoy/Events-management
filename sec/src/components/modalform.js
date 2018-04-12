import React, { Component } from 'react'

class ModalForm extends Component {

  postBlog = function(e) {
    e.preventDefault()
    var name = document.getElementById("username").value
    var password = document.getElementById("password").value

  //   if (name && password) {
  //     var date = new Date()
  //
  //     var blog = {
  //       title: title,
  //       content: content,
  //       date: date.toDateString()
  //     }
  //     var blogs = JSON.parse(window.localStorage.blogs || "[]")
  //     blogs.push(blog)
  //     window.localStorage.blogs = JSON.stringify(blogs)
  //     window.location = "/"
  //   } else {
  //     document.getElementById("error-div").innerHTML = "The above fields are mandatory"
  //   }
  // }
}
  render() {
    return (
      <div id="form-modal" class="uk-flex-top" uk-modal>
          <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">

              <button class="uk-modal-close-default" type="button" uk-close></button>
              <legend class="uk-legend uk-text-danger">Sign in</legend>
              <div class="uk-margin">
                <input class="uk-input" id="username" placeholder="Username" />
              </div>
              <div class="uk-margin">
                <textarea class="uk-textarea" id="password" placeholder="Password" rows="1"></textarea>
              </div>
              <div class="uk-margin uk-text-muted uk-text-center">
                <span id="error-div"></span>
              </div>
              <div class="uk-margin uk-text-right">
                <button class="uk-button uk-button-default uk-modal-close">Cancel</button> &nbsp;&nbsp;
                <button class="uk-button uk-button-danger post-button" onClick={this.postBlog}> Sign in </button>
              </div>
          </div>
      </div>
    );
  }
}
export default ModalForm
