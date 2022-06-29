import "./info.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function FeaturedInfo(){
    return(
        <div className="featured">

        <div className="featureditem">
        <span className="featuredtitle">Revenue</span>
        <div className="featuredmoneycontainer">
        <span className="featuredmoney">$2,333</span>
        <span className="featuredmoneyrate">
        -11.4 <ArrowDownwardIcon className="featurediconnegative"/>
          </span>

        
        </div> 
        <span className="featuredsub">Compared To Last Month</span>

        
        </div>

        <div className="featureditem">
        <span className="featuredtitle">Sales</span>
        <div className="featuredmoneycontainer">
        <span className="featuredmoney">$2,333</span>
        <span className="featuredmoneyrate">
        -11.4 <ArrowDownwardIcon className="featurediconnegative"/>
          </span>

        
        </div> 
        <span className="featuredsub">Compared To Last Month</span>

        
        </div>

        <div className="featureditem">
        <span className="featuredtitle">Cost</span>
        <div className="featuredmoneycontainer">
        <span className="featuredmoney">$2,333</span>
        <span className="featuredmoneyrate">
         11.4 <ArrowUpwardIcon className="featuredicon"/>
          </span>

        
        </div> 
        <span className="featuredsub">Compared To Last Month</span>

        
        </div>
        
        </div> 
    );
}