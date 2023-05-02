const elementFactory = (type) => {
    const element = document.createElement(type);


    return element;
}

const createDiv = () => elementFactory("div");
const createPara = () => elementFactory();
