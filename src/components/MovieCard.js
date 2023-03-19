import '../App.css';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

function MovieItem(props) {
    let img = `https://image.tmdb.org/t/p/w500/${props.image}`;

    return (
        <>
            <div className="card" style={{ width: "20rem", marginBottom: "20px" }}>
                {/* <img src={props.image} className="card-img-top" alt="movie " /> */}
                <img src={img} className="card-img-top" alt="movie " />
                <div className="card-body" >
                    <h4 className="card-title">{props.title}</h4>

                    <div className="card-info">
                        <i>Released Date <span>{props.release_date}</span></i>
                        <i>Average Votes <span>{props.avg_vote}</span></i>
                    </div>

                    <p className="card-text"> <a href={`/detail/${props.id} `} onClick={() => props.readMore(props.id)}>Read more</a></p>

                    <IconButton aria-label="add to favorites" style={{ color: "red" }} onClick={() => props.handleClick(props.title, props.id)}>
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share" style={{ color: "#233f57" }} onClick={() => props.handleShare()}>
                        <ShareIcon />
                    </IconButton>
                </div>
            </div>
        </>
    );
}

export default MovieItem;



