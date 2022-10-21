import geckos from "@geckos.io/client"; 
const channel = geckos({ url: 'http://localhost:4000', port: null });
channel.onConnect((err) => console.log(err));
export {
    channel
}