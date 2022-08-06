export const getGifs = async(category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=d5qfxMDvHU4hvMZy5DCz5xMYdne5xD6m&q=${category}&limit=20`;
    
    const {data = []} =  await (await fetch(url)).json();
    
    const gifs = data.map(img=>{
        return {
           id: img.id ,
           title: img.title,
           url: img.images.downsized_medium.url             
        }
    })


    
    return gifs;

}