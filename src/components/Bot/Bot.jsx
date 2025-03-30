import { useEffect } from "react"

export default function Bot() {
    useEffect(() => {
        // Load Botpress scripts
        const injectScript = document.createElement("script")
        injectScript.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js"
        injectScript.async = true
        document.body.appendChild(injectScript)

        const botpressScript = document.createElement("script")
        botpressScript.src = "https://files.bpcontent.cloud/2025/03/28/22/20250328222902-CLKXZ7YV.js"
        botpressScript.async = true
        document.body.appendChild(botpressScript)

        return () => {
            // Clean up scripts when component unmounts
            if (document.body.contains(injectScript)) {
                document.body.removeChild(injectScript)
            }
            if (document.body.contains(botpressScript)) {
                document.body.removeChild(botpressScript)
            }
        }
    }, [])

    return <div className="botpress-container"></div>
}
