import React, {Component} from 'react';

export default class Header extends Component {
    render(){
        return (
          <header class="main-header">
          <a href="index2.html" class="logo">
            <span class="logo-mini">M<b>A</b>L</span>
            <span class="logo-lg">ReactMA<b>dmin</b>LTE</span>
          </a>
          <nav class="navbar navbar-static-top">
            <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
              <span class="sr-only">Toggle navigation</span>
            </a>
      
            <div class="navbar-custom-menu">
              <ul class="nav navbar-nav">
                <li class="dropdown user user-menu">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    <img src="dist/img/yan.jpg" class="user-image" alt="User Image" />
                    <span class="hidden-xs">Yan Kusyanto</span>
                  </a>
                  <ul class="dropdown-menu">
                    <li class="user-header">
                      <img src="dist/img/yan.jpg" class="img-circle" alt="User Image" />
      
                      <p>
                        Yan Kusyanto - Web Developer
                        <small>Member since Nov. 2012</small>
                      </p>
                    </li>
                    <li class="user-body">
                      <div class="row">
                        <div class="col-xs-4 text-center">
                          <a href="#">Followers</a>
                        </div>
                        <div class="col-xs-4 text-center">
                          <a href="#">Sales</a>
                        </div>
                        <div class="col-xs-4 text-center">
                          <a href="#">Friends</a>
                        </div>
                      </div>
                    </li>
                    <li class="user-footer">
                      <div class="pull-left">
                        <a href="#" class="btn btn-default btn-flat">Profile</a>
                      </div>
                      <div class="pull-right">
                        <a href="#" class="btn btn-default btn-flat">Sign out</a>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        )
    }
}