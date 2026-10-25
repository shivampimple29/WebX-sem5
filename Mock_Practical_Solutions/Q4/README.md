# Question 4

## Problem Statement
> **4. Build a basic ”Hello World” application using the Angular framework. Use an earlier AngularJS variant to demonstrate the practical application of directive attributes like ng-controller for managing state, ng-model for two-way data binding on a text input, and expressions to display real-time text updates.**

---

## Solution Overview
This solution demonstrates foundational AngularJS concepts in a single, lightweight HTML document styled cleanly with Tailwind CSS (via CDN).

### Directives & Features Demonstrated
- **`ng-app="helloApp"`**: Automatically bootstraps the AngularJS application on the root element.
- **`ng-controller="HelloController"`**: Attaches the controller to manage view-state via `$scope`.
- **`ng-model="userName"`**: Establishes bidirectional (two-way) data binding between the text `<input>` and the controller model.
- **`{{ userName }}`**: Expression interpolation displaying real-time model changes in the DOM without manual event handlers.

### File Structure
- `index.html`: Self-contained AngularJS 1.8.2 application styled with Tailwind CSS.
