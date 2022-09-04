import stock from "../data/data"; 


const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(stock);
        }, 1000);
    });
};


export default getData