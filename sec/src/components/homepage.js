import React, { Component } from 'react'
import ModalForm from './modalform'

class Homepage extends Component {



  render() {
    return (
      <div className="homepage">
        <div class="uk-flex uk-flex-center@m uk-flex-left@m">
        <div className="typewriter">
          <h3>For</h3>
          <h2>Better</h2>
          <h1 id="typewriter">Management</h1>
          <h1></h1>
        </div>
        </div>
        <div className="platform">
          <div class="uk-card uk-card-default uk-card-hover">
            <div class="uk-card-media-bottom">
              <button uk-toggle="target: .uk-button; mode: click; cls: uk-button-primary" class="uk-button uk-button-primary uk-margin-small-bottom uk-toggle">General Secretary</button>
              <button uk-toggle="target: .uk-button; mode: click; cls: uk-button-primary" id="buttin" class="uk-button uk-button-default uk-margin-small-bottom ">Secretary</button>
            </div>
              <div class="uk-card-body">
                  <form>
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
                    <div class="uk-margin uk-text-center">
                      <button class="uk-button uk-button-danger post-button" onClick={this.postBlog}> Sign in </button>
                    </div>
                  </form>

              </div>


          </div>

          <ModalForm/>

        </div>



      </div>

    );
  }
}
export default Homepage
