:: Why React? ::
http://facebook.github.io/react/

is a Javascript library for creating user interfaces. Its the V in MVC (Views). 

:; Unique Declarative ::
When the data changes, React conceptually hits the "refresh" button and knows to only update the changed parts.
The data is removed then reposted to react to the new changes upon rerendering.

JSX is a JavaScript syntax extension that looks similar to XML.
http://facebook.github.io/react/jsx-compiler.html 

:: Data Flow ::

Data flows through one-way data binding between owner and owned. Owners bind their props or states to the owned component's props.

:: Ownership for Multiple Component Apps::

An owner is the component that sets the props & states of other components.
If a component A is created in B component's render(), then A is owned by B.

Example: 

ProfilePic

ProfileLink
  Profile + Username

Avatar
  Profile Pic + Profile Link 

Then rendered/built into a single component:

Component Owner : Avatar
Component Owned : ProfilePic
                  ProfileLink

At the end only one component is rendered.

One limitation: React components can only render a single root node. If you want to return multiple nodes they must be wrapped in a single root.

http://facebook.github.io/react/docs/multiple-components.html

:: "Model" Data ::
:: Simple Props Component ::

render() method
  takes input data and returns what to display
  accessed via this.props

:: Stateful Component ::

a component can maintain internal state data via this.state
States are used to respond to user input, server request or the passing of time.
Any component's event handlers that trigger changes/updates the UI.

http://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html


:: TodoMVC ::
Todo App uses props and state
http://todomvc.com/examples/react/#/

Who uses it?
Instagram
Facebook
Hipchat
https://developer.atlassian.com/blog/2015/02/rebuilding-hipchat-with-react/

