function isNews(tole) {
    return tole.map((data, i) => {
        return (
            <div className="card w-full md:w-96 bg-base-100 shadow-xl" key={i}>
                <figure>
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{data.title}</h2>
                    <p>{data.description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-inline">
                            {data.category}
                        </div>
                        <div className="badge badge-outline">{data.author}</div>
                    </div>
                </div>
            </div>
        );
    });
}

const dataEmpty = () => {
    return <h1 className="text-center">Saat ini data kosong</h1>;
};

export default function NewsCard(news) {
    return !news.news ? dataEmpty() : isNews(news.news);
}
