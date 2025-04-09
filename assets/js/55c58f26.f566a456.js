"use strict";(self.webpackChunkcogs_300_docs=self.webpackChunkcogs_300_docs||[]).push([[987],{5365:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"concepts/teaching/labs/lab01","title":"Lab 01. Interfacing with Arduino","description":"Overview","source":"@site/docs/concepts/teaching/labs/lab01.md","sourceDirName":"concepts/teaching/labs","slug":"/concepts/teaching/labs/lab01","permalink":"/docs/concepts/teaching/labs/lab01","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Lab 01. Interfacing with Arduino"},"sidebar":"tutorialSidebar","previous":{"title":"Labs","permalink":"/docs/concepts/teaching/labs/"}}');var r=t(4848),o=t(8453);const s={title:"Lab 01. Interfacing with Arduino"},l=void 0,a={},c=[{value:"Overview",id:"overview",level:2},{value:"Materials and Prep",id:"materials-and-prep",level:2},{value:"TODOs",id:"todos",level:2},{value:"Slides",id:"slides",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/labs/lab01",children:"Link to Lab 01"})}),"\n",(0,r.jsx)(n.p,{children:"This lab will be most people's introduction to a few big, new ideas that are at the core of the course's technical content:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Physical circuit design"}),"\n",(0,r.jsx)(n.li,{children:"Controlling physical objects with a microcontroller"}),"\n",(0,r.jsx)(n.li,{children:"Event loops and real-time operation"}),"\n",(0,r.jsx)(n.li,{children:"Serial communication between a microcontroller and a computer program"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Many of these ideas are difficult to get across conceptually. It is best to mostly allow them to be understood experientially first. It may take some people the whole term to really understand them."}),"\n",(0,r.jsx)(n.h2,{id:"materials-and-prep",children:"Materials and Prep"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Arduino","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.arduino.cc/en/software",children:"Arduino IDE"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.arduino.cc/learn/starting-guide/getting-started-arduino/",children:"Getting Started"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.arduino.cc/tutorials/uno-r4-wifi/led-matrix/",children:"LED Matrix Tutorial"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.arduino.cc/software/ide-v2/tutorials/ide-v2-serial-monitor/",children:"Serial Monitor"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.arduino.cc/built-in-examples/basics/Blink/",children:"Blink"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Processing","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://processing.org/",children:"Processing.org"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://hello.processing.org/",children:"Hello Processing"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["TinkerCAD","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.tinkercad.com/things/cQZG3VFxYOw-lecture-intro-hello-world",children:"TinkerCAD"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Tools","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.sciencebuddies.org/science-fair-projects/references/how-to-use-a-multimeter",children:"multimeter"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Code","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/COGS-300/lab01",children:"Lab 01 GitHub"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Make yourself familiar with the basics of the above links. Know how to build a circuit, use the multimeter, and communicate between Arduino and Processing. It's always better to a bit more prepared than the students, e.g., build your own version of the design challenge."}),"\n",(0,r.jsx)(n.h2,{id:"todos",children:"TODOs"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Introduce yourself to the students."})," Tell them your major, your experience with COGS and robotics, and why you're excited to TA the course. Tell them about your role, office hours, and contact info (include Piazza and COGS discord)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Introduce the students to the lab."})," Go over lab rules, safety procedures, and equipment location. Tell them about the shelves, black boxes, and equipment storage/signout procedures."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Demo TinkerCAD."})," Show TinkerCAD, including the code, visual circuit programmer, engineering circuit diagram, and simulation features. Show the multimeter in TinkerCAD."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Demo and explain the Arduino."})," Show the same things from TinkerCAD on the real, live, Arduino. Show the LED matrix, serial monitor, and blink sketch. Demonstrate the key pins and concepts behind the pins."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Demo the multimeter."})," Show how to get a continuity reading, voltage reading, and current reading."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"slides",children:"Slides"}),"\n",(0,r.jsxs)(n.p,{children:["Generate slides using ",(0,r.jsx)(n.a,{href:"https://github.com/marp-team/marp-cli",children:"Marp"}),". If you're using the CLI, save the following to ",(0,r.jsx)(n.code,{children:"lab01.md"})," and run ",(0,r.jsx)(n.code,{children:"marp lab01.md"}),". Pre-written ",(0,r.jsx)(n.a,{href:"/slides/labs/lab01.md",children:"markdown"})," and pre-rendered ",(0,r.jsx)(n.a,{href:"/slides/labs/lab01.html",children:"html"})," available."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mdx",children:"---\ntheme: uncover\n---\n\n# Hello, my name is ______.\n\nMajor: ______.\nOffice hours: ______.\nContact info: ______.\nPiazza link: ______.\nDiscord link: ______.\n\n---\n\n# Welcome to the COGS 300 Lab\n\nThe COGS 300 Lab is available for you to use during the day (7:00am - 9:00pm). You are welcome to claim a shelf with your team, use a black lock box, and use the equipment. \n\n---\n\n# Lab Rules\n\n1. **Clean up after yourself.** Clean up _more_ than what you used. What goes around comes around. Ensure your table is totally clear.\n2. **Turn everything off.** Ensure everything (i.e., lights, soldering iron, etc.) is _off_ and _cold_ before you leave.\n3. **Sweep and remove trash**. If there is trash in the trash box, take it out. Waste sorting is around the corner from Chris and Colleen's office.\n\n---\n\n# Safety Procedures\n<style scoped>section{font-size:30px;}</style>\n\n1. Soldering must be only done on the soldering table.\n2. The charcoal filter fan must be running while you solder.\n3. Familiarize yourself with the location of the fire extinguisher.\n4. Familiarize yourself with the exit routes.\n5. Unplug anything that starts to get hot, produce smoke, or smell bad.\n\n\nYou are working with live electricity. Although the Arduino's 5V output is not enough to damage you, it can damage your computer or Arduino. Do not plug anything in unless you are _certain_ that it is safe. Be particularly certain of anything that plugs into the wall. _Wall power can kill you._\n\n--- \n\n# Equipment rules\n\n1. All tools are to remain in the COGS lab. No exceptions.\n2. Robot parts are allowed to be borrowed, but must be signed out.\n3. Return all parts that you have borrowed and sign them back in.\n4. Do not borrow more than you absolutely need. \n5. If you need something for more than a week, buy it.\n\n---\n\n# Lab Storage\n\n1. You're free to claim a shelf with your team.\n2. You're free to put a lock on a black plastic box.\n3. Shelf storage must be removed by the last day of class or it will be thrown out or added to lab inventory.\n\n--- \n\n# TinkerCAD\n\n\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var i=t(6540);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);