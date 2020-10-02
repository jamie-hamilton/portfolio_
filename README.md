# :computer: portfolio_

My portfolio is built using React on a Django API.

__tl;dr:__
- React! React Router! Django Rest Framework! Sass! Fetch! npm! ``this.props.data.map``!

- see the finished project [here](https://jh-portfolio-app.herokuapp.com)

- favourite code snippet:
```JSX
    render() {
        return (
            // Alternate column order and project-related bg-colours for project list
            <Row ref={this.row} className={`project-row bg-${this.props.project.title}`}>
                <Col md={
                    this.props.project.priority % 2 == 0
                    ? {span: 6, order: 'last'}
                    : {span: 6, order: 'first'}
                }>
            ...
```

- what it looks like:

![portfolio screenshot](https://s3.eu-west-2.amazonaws.com/media.jh-portfolio/media/project_images/portfolio-1.png)

Having only dipped my toes into React up to this point, I decided that building a portfolio would be a good chance to become more familiar with its workings. Researching how best to interact with the API and setting up the workflow of the project took some time, but once that was out of the way I loved how intuitive working with components felt. I'd trialled manipulating DOM elements solely with JavaScript as a requirement of my [mail](https://github.com/jimthethief/mail_) project, and the contrast between working in that way and using JSX inline made me appreciate why React is such a useful tool.

I was also pretty new to npm and webpack, so it was nice to get some hands on experience with those. As well being necessary for builds and SCSS compiling in production, webpack came in super handy for workflow during development. I used webpack-dev-server for hot reloading and dynamic imports, which proved much more efficient than forcing a new build every time that the source code was amended.

My vision was for the portfolio to feel more like software than a web page. To achieve this, I relied on calls to fetch and React Router when switching between home and project views - keeping navigation and header elements constantly in view for smooth navigation. I also integrated a range of CSS and JavaScript animations for some extra bells and whistles.

The data needed to dynamically display all the relevant aspects of each project was fairly complex, with plenty of embedded relationships. Serializing everything needed so that it itegrated nicely with the frontend could've descended a nightmare, but [Django Rest Framework's](https://www.django-rest-framework.org) serializers, views and excellent documentation made it much more manageable. The API means that adding, switching out and reording projects and page content is an absolute breeze and can all be carried out via Django admin. 