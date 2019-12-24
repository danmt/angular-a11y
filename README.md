# 5 tips to make your Angular application more accessible

This article intention is to give the reader a few tips to follow when building accessible Angular applications. This is by no means an exhaustive list or a cheatsheet of all the things you have to do in order to be WCAG compliant. I'm not going to talk about A, AA, Section 508, none of that. The idea is to give you the basic ideas so you can start from there.

I wanted to make it fun, so I decided to create an Angular app that has multiple accessibility problems that we will identify together. For each of those problems there's going to be a solution. These aren't production ready solutions but they are a good point of start.

I created this [repository for the article](https://github.com/danmt/angular-a11y), it has multiple branches. Each tip has two branches, one for the problem and one for the solution. Each of those branches can be easily configured locally by following these steps:

- git clone the repository
- cd to the directory with your command line tool
- run the command `npm install`
- run the command `npm run start`

The application will run on the port **4200** and you can access it with the browser of choice.

## #1: Hide elements from the DOM using ngIf

Angular is here to help us improve the developer experience. They provide us with multiple things that make our life easy, but sometimes we want to feel smarter and try to do things on our own. In case you want an example of the problem access this [branch with the first tip problem](https://github.com/danmt/angular-a11y/blob/tip-1-problem/src/app/home/home.component.html).

One good example of this is the `ngIf` directive. I've seen projects where they prefer to use something like this in their styles:

```css
.hide {
  width: 0;
  height: 0;
  opacity: 0;
}
```

In combination with this in the template:

```html
<div [ngClass]="{ 'hide': hide }">
  <h2>SAMPLE</div>
  <button>Click me!</button>
</div>
```

Although that will hide the element, it's still there. Any focusable element inside a _hidden_ element with the above technique will still be focusable even if its not _visible_. By that I mean we can focus the button without it being visible.

This issue can be easily solved using the `ngIf` directive instead of creating a new class and conditionally adding it to the element. It can be used like this:

```html
<div *ngIf="!hide">
  <h2>SAMPLE</div>
  <button>Click me!</button>
</div>
```

In case you are wondering how to solve it for the branch I gave you, access here to the [solution of the first tip](https://github.com/danmt/angular-a11y/blob/tip-1-solution/src/app/home/home.component.html)

## #2: Use semantic HTML

If you have been following my other _a11y_ articles you are probably aware of this, but I still have to make sure to remind everybody. So it turns out that Html actually help us a lot, if we use the semantic Html the browser can properly give us with out-of-the-box functionality that makes it way easier for you. In case you want an example of the problem access this [branch with the second tip problem](https://github.com/danmt/angular-a11y/blob/tip-2-problem/src/app/shared/components/button/button.component.html).

If you run it locally you will notice that it looks exactly the same, but if you try to tab through the elements you'll see that the buttons are not focusable. That can be fixed by doing:

```html
<div tabindex="1">Im focusable</div>
```

But buttons also provide us with keyboard support, they can be activated through the keyboard either typing ENTER or SPACE. That can also be achieved by creating a custom directive that listen to keyUp events and activates the button that's currently focused. As you can see, a lot of work that can be easily achieved by doing this instead:

```html
<button>Im focusable</button>
```

> BOOM ---> We achieved the same with almost no code.

If you are wondering what this has to be with Angular, it doesn't, at least directly. The issue is that since Angular allows you to create components easily, we tend to think that we'll rather build our own button component. My advice is to extend the button element instead.

In case you are wondering how to solve it for the branch I gave you, access here to the [solution of the second tip](https://github.com/danmt/angular-a11y/blob/tip-2-solution/src/app/shared/components/button/button.component.html)

## #3: Headings are important

I even created an article about this. When I started my journey into _a11y_, I realized how important headings are for screen reader users. If you are interested in learning more about this topic you can read my article [Headings in Angular](https://dev.to/thisdotmedia/make-it-accessible-headings-in-angular-16b6)

With headings is the same that with buttons. Given how easy its to create a custom component, sometimes instead of using a heading element (_h1_, _h2_, ...) we create a span and give to it some custom styles and use it as a title.

Given the simplicity of this tip and that there's a whole article already for it, im gonna skip the creation of the branches.

## #4: Focus flow has to be logical

I'm a fan of using CSS as much as I can, to help me during the development process of any user interface. But sometimes that can be a little dangerous, for example, when you use `flex` and you decide to use `flex-direction: column-reverse` or `flex-direction: row-reverse`, its nice at first glance to be able to change the order in which items are layout from CSS but it has an incredible weakness.

> What happens if the elements inside the flex layout contain focusable elements?

If you said that the focus will be affected, you were totally right. If you want to see that in action you can access this [branch with the forth tip problem](https://github.com/danmt/angular-a11y/tree/tip-4-problem/src/app).

From the code you'll see that the article's focus order is in the opposite way, now it guys right to left. That's clearly making it harder for the majority of the users so we have to avoid using the _reversed_ directions from `flex` and instead set the order programatically before accessing to the template by making use of Typescript.

If you are wondering what I mean by that, this [commit diff of the forth tip solution](https://github.com/danmt/angular-a11y/commit/e6916d96fcb8b78e785a657b194e86edb1b5ae81) will clear things up.

## #5: You can trust CSS

Maybe after the last tip you are a bit skeptical thinking, Okay I'll never trust CSS again. But it was just to give you some awareness, CSS is actually very helpful. Let's say that you want to display a string as Upper Case in your template. If you are a seasoned Angular developer you'll say that's easy, let's use a pipe.

Even though it works, its not what you want. When screen readers find strings in Upper Case it spells it to the user making it hard to understand so in this case you better use `text-transform: uppercase` that will make it uppercase only for visual purposes.

## Conclusion

This is not an exhaustive list of all the things you have to do to be WCAG 2.1 AA compliant but a fun article to read to give developers some insights about my latest research. If you have more tips to add to this list, just send a comment and will add it. Would love if us as Angular Developer can have a list of tips to ensure our apps come out more accessible.
