import React from "react"
import FeatureGrid from "../components/FeatureGrid"
import { ThemeContext } from "../contexts"

const data = {
  headline: "Features",
  items: [
    {
      key: "1",
      title: "Accelerometer",
      text:
        "Access the device accelerometer sensors to respond to changes in device motion in 3d space."
    },
    {
      key: "2",
      title: "Social Authentication",
      text:
        "Enable log in with the Facebook and Google native SDKs, or support any browser-based auth flow."
    },
    {
      key: "3",
      title: "Camera",
      text:
        "Stream a preview of the device Camera capture, save photos, and configure hardware parameters like focus and white balance."
    },
    {
      key: "4",
      title: "File System",
      text: "Save and read assets, documents, and other data your users need."
    },
    {
      key: "5",
      title: "Image Picker",
      text:
        "Import and manipulate photos and videos stored on the device, including the shared camera roll."
    },
    {
      key: "6",
      title: "Location",
      text:
        "Build location-aware apps by polling for the current device location or subscribing to location updates."
    },
    {
      key: "7",
      title: "Native Graphics",
      text:
        "Expo includes a WebGL-compatible API called EXGL. Drop in popular JS graphics libraries like THREE.js and take advantage of truly native graphics."
    },
    {
      key: "8",
      title: "Push Notifications",
      text:
        "Send and receive cross-platform push notifications with a few lines of JS."
    },
    {
      key: "9",
      title: "Your API Here",
      text:
        "Advanced users can render a native project with ExpoKit and write their own custom native code."
    }
  ]
}

class FeatureGridContainer extends React.Component {
  static contextType = ThemeContext

  render() {
    return <FeatureGrid {...data} {...this.props} theme={this.context} />
  }
}

export default FeatureGridContainer
