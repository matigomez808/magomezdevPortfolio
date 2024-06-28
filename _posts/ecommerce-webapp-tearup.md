---
title: "Ecommerce WebApp Showcase | Tear Up"
excerpt: "In this first english upload we go to my first React project repo and review some of the key aspects of the project. We focus on state management with Zustand."
coverImage: "/assets/blog/coverJuly1.png"
date: "2024-07-01"
author:
  name: Mati Gomez
ogImage:
  url: "/assets/blog/coverJuly1.png"
---

Welcome to this first english post on what now is a bilingual project. 
Here's the repo we'll be looking at: [Ecommerce Project Repository](https://github.com/matigomez808/agur-shop)
This is a project I built with a real local brand in mind. For this particular project, the purchasing flow was the main focus, so that's what we will explore here, particularly in terms of state management.

### State management in a React App

![useBoundStoreSnippet](/assets/blog/useBoundStoreSnippet.png)

Zustand comes up as the main enabler for all this to work. Leveraging the slices feature, a bound store can be created and used to gain access to any slice of state globally. Building slices is just like setting up `useState`, in that you need the two bits `[state, setState]`. You can manage and customize your slices to fit any purpose within the app.

Whether you want to encourage a form submission, create a mini-game, or manage a highly interactive UI component, state management is key for an engaging experience on your site. In this app, I opted for a highly modular approach, taking advantage of the global nature of state with Zustand. Some parts of the app access only a bit of state, while others require multiple pieces of information. 

The slices are: `cartSlice`, `formSlice`, `paymentSlice` and `shippingSlice`

![EcommerceCartSlice](/assets/blog/ecommerceCartSlice.png)

Right now, I don’t remember why I set it up this way, but we can make educated guesses by looking at the code. I say *guess* and not *deduce* because I still name variables `formSlice` every now and then.

`cartSlice` handles the cart. It has two props  `store.items()` and `store.total()` and two methods `store.addItem()`, `store.removeItem({id})`. The cart component uses it to display those props and `<ItemCards />` uses it to add and remove products (`items`) to and from the cart.

![shippingSliceSnippet](/assets/blog/shippingSliceSnippet.png)

Next, we look at formSlice. It handles everything in the `FormPersonalInfo` component. All that data is stored and managed there. After payment, this data would be used to place a ticket somewhere to keep track of sales. This slice also handles some basic validation.

Since payment is not implemented, `shippingSlice` is the last one. This bit of state is interesting because it not only keeps track of user input but also takes from another slice. The user defines the shipping type, and the shipping address is taken from the previous form. This slice uses the address from a previously filled form and also picks up "updated" shipping cost information (in this case, this info is a static import from `data/shippinginfo.js`) to output different outcomes related to shipping. Just like `formSlice`, `shippingSlice` would, in a production environment, log this data to a db in order to create a ticket or a shipping label. 

We can see that each slice integrates differently with a specific purpose. Of course this whole app is quite bare-bones but it does it's thing. I'm glad we're taking a look back at this code since it's my first React App.

Now let's look at some other places where state is handled.

### Checkout.jsx

![checkoutJsxSnippet](/assets/blog/checkoutJsxSnippet.png)

This component has quite a bit going on. First, it uses React's `useState` hook to track some stepping. That's not all it does state-wise; it also accesses `cartSlice` and `shippingSlice` to display information. It has a `buttons` component that renders navigation handles for the user to move through the steps. There is a `list()` function that brings up the items in the cart, and at the bottom, it renders a division from the main element that displays the info we discussed previously.

The main element is defined by the step the user is on. This is tracked using a `steps` variable and some conditional rendering. The checkout renders itself, and as children, it renders `<FormPersonalInfo />`, `<FormShipping />`, and `<FormPaymentOptions />` one at a time.

It seems to be quite an intricate and deeply nested app with many `'use client'` components within each other, but the data remains tidy and decoupled. Moving forward, UI state could very well be on a slice of its own. Things like animations, the cart drawer being open or closed, and modals being open could all be handled with a specific `uiSlice`.