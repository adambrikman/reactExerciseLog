(this["webpackJsonpmern-exercise-tracker"]=this["webpackJsonpmern-exercise-tracker"]||[]).push([[0],{161:function(e,t,a){},162:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(34),l=a.n(s),c=a(23),i=a(24),o=a(14),u=a(15),m=a(17),h=a(16),d=a(18),p=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-info navbar-expand-lg"},r.a.createElement(c.b,{to:"/",className:"navbar-brand"},"WorkoutLog"),r.a.createElement("ul",{className:"navbar-nav collapse navbar-collapse justify-content-end"},r.a.createElement("li",{className:"navbar-item"},r.a.createElement(c.b,{to:"/user",className:"nav-link"},"Create User")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(c.b,{to:"/create",className:"nav-link"},"Create Exercise Log")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(c.b,{to:"/",className:"nav-link"},"All Workouts"))))}}]),t}(n.Component),b=a(6),E=a(11),g=a.n(E),v=function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.exercise.username),r.a.createElement("td",null,e.exercise.description),r.a.createElement("td",null,e.exercise.duration),r.a.createElement("td",null,e.exercise.date.substring(0,10)),r.a.createElement("td",null,r.a.createElement(c.b,{to:"/edit/"+e.exercise._id},"edit")," | ",r.a.createElement("span",{style:{color:"#007bff"},onClick:function(){e.deleteExercise(e.exercise._id)}},"delete")))},f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).deleteExercise=a.deleteExercise.bind(Object(b.a)(a)),a.state={exercises:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("http://localhost:5000/exercises/").then((function(t){e.setState({exercises:t.data})})).catch((function(e){}))}},{key:"deleteExercise",value:function(e){g.a.delete("http://localhost:5000/exercises/"+e).then((function(e){return e.data})),this.setState({exercises:this.state.exercises.filter((function(t){return t._id!==e}))})}},{key:"exerciseList",value:function(){var e=this;return this.state.exercises.map((function(t){return r.a.createElement(v,{exercise:t,deleteExercise:e.deleteExercise,key:t._id})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Logged Exercises"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead-light"},r.a.createElement("tr",null,r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Duration (minutes)"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,this.exerciseList())))}}]),t}(n.Component),C=a(35),x=a.n(C),D=(a(69),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).onChangeUsername=a.onChangeUsername.bind(Object(b.a)(a)),a.onChangeDescription=a.onChangeDescription.bind(Object(b.a)(a)),a.onChangeDuration=a.onChangeDuration.bind(Object(b.a)(a)),a.onChangeDate=a.onChangeDate.bind(Object(b.a)(a)),a.onSubmit=a.onSubmit.bind(Object(b.a)(a)),a.state={username:"",description:"",duration:0,date:new Date,users:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("http://localhost:5000/exercises/"+this.props.match.params.id).then((function(t){e.setState({username:t.data.username,description:t.data.description,duration:t.data.duration,date:new Date(t.data.date)})})).catch((function(e){console.log(e)})),g.a.get("http://localhost:5000/users/").then((function(t){t.data.length>0&&e.setState({users:t.data.map((function(e){return e.username}))})})).catch((function(e){console.log(e)}))}},{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"onChangeDuration",value:function(e){this.setState({duration:e.target.value})}},{key:"onChangeDate",value:function(e){this.setState({date:e})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,description:this.state.description,duration:this.state.duration,date:this.state.date};console.log(t),g.a.post("http://localhost:5000/exercises/update/"+this.props.match.params.id,t).then((function(e){return console.log(e.data)})),window.location="/"}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Edit Exercise Log"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username: "),r.a.createElement("select",{ref:"userInput",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername},this.state.users.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Description: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.description,onChange:this.onChangeDescription})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Duration (in minutes): "),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.duration,onChange:this.onChangeDuration})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date: "),r.a.createElement("div",null,r.a.createElement(x.a,{selected:this.state.date,onChange:this.onChangeDate}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Edit Exercise Log",className:"btn btn-primary"}))))}}]),t}(n.Component)),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={username:"",description:"",duration:0,date:new Date,users:[]},a.onChangeUsername=a.onChangeUsername.bind(Object(b.a)(a)),a.onChangeDescription=a.onChangeDescription.bind(Object(b.a)(a)),a.onChangeDuration=a.onChangeDuration.bind(Object(b.a)(a)),a.onChangeDate=a.onChangeDate.bind(Object(b.a)(a)),a.onSubmit=a.onSubmit.bind(Object(b.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("http://localhost:5000/users/").then((function(t){t.data.length>0&&e.setState({users:t.data.map((function(e){return e.username})),username:t.data[0].username})}))}},{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"onChangeDuration",value:function(e){this.setState({duration:e.target.value})}},{key:"onChangeDate",value:function(e){this.setState({date:e})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,description:this.state.description,duration:this.state.duration,date:this.state.date};console.log(t),g.a.post("http://localhost:5000/exercises/add",t).then((function(e){return console.log(e.data)})),window.location="/"}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Create New Exercise Log"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-lg-2 col-md-6 col-sm-6"},r.a.createElement("label",null,"Username: "),r.a.createElement("select",{ref:"userInput",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername},this.state.users.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-6"},r.a.createElement("label",null,"Description: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.description,onChange:this.onChangeDescription}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-lg-2 col-md-6 col-sm-6"},r.a.createElement("label",null,"Duration (in minutes): "),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.duration,onChange:this.onChangeDuration}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date: "),r.a.createElement("div",null,r.a.createElement(x.a,{selected:this.state.date,onChange:this.onChangeDate}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Create Exercise Log",className:"btn btn-info"}))))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).onChangeUsername=a.onChangeUsername.bind(Object(b.a)(a)),a.onSubmit=a.onSubmit.bind(Object(b.a)(a)),a.state={username:""},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username};g.a.post("http://localhost:5000/users/add",t).then((function(e){return console.log(e.data)})),this.setState({username:""})}},{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-3 col-md-6 col-sm-6"},r.a.createElement("h3",null,"Create New User"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Create User",className:"btn btn-info"})))))}}]),t}(n.Component);a(160),a(161);var y=function(){return r.a.createElement(c.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(p,null),r.a.createElement("br",null),r.a.createElement(i.a,{exact:!0,path:"/",component:f}),r.a.createElement(i.a,{exact:!0,path:"/user",component:j}),r.a.createElement(i.a,{exact:!0,path:"/edit/:id",component:D}),r.a.createElement(i.a,{exact:!0,path:"/create",component:N})))};l.a.render(r.a.createElement(y,null),document.getElementById("root"))},77:function(e,t,a){e.exports=a(162)}},[[77,1,2]]]);
//# sourceMappingURL=main.b5bf1deb.chunk.js.map