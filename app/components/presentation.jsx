import "../styles/semana.css";
import ItemLogo from "../atomic/item-logo";
import ItemEventInfo from "../atomic/item-event-info";
import ItemSocialMedia from "../atomic/item-social-media";

export default function Presentation () {
    return (
        <div>
            <ItemLogo />
            <ItemEventInfo />
            <ItemSocialMedia />
        </div>
    )
}