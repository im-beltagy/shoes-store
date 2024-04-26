I know `Nav` code is hard to read but I did multiple things to avoid `client-side rendering`

1- Used `checkbox` instead of `onClick`
with that I using `group/header` to do styles depending on the parent in this case the parent is the `<header>` element.

2- Used `grid-template-row` for smooth opening menu without calculating height using JavaScript
