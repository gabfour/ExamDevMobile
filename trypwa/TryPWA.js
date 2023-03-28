
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function TryPWA() {
    return(
        <Div>
            <Div>
                <Text>It seems you haven't installed our app yet!</Text>
                <Text>Installing the app will provide you with a more responsive service and some offline access</Text>
                <Text>The following browers are compatible and can let you download our app:</Text>
                <img src={'./BrowserCompatibility.png'} />
            </Div>
            <Div>
                <Text>If your device is compatible, you will see a download prompt next to this message</Text>
                <FontAwesomeIcon icon="fa-regular fa-right" />
                <Text>Alternatively, find out what feature your device has access to <a href="https://whatwebcando.today/">HERE</a></Text>
            </Div>
        </Div>
    )
    // Returns a top of the screen banner explaining how and why install the PWA along with a button
}


