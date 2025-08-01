"use client"

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { SendHorizonal, MessageSquare } from "lucide-react"

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [chatLog, setChatLog] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  const toggleChat = () => setIsOpen(!isOpen)

  const sendMessage = async () => {
    if (!input.trim()) return
    setLoading(true)
    setChatLog((prev) => [...prev, `🧑‍💻 ${input}`])

    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({
        messages: [{ role: "user", content: input }],
      }),
    })

    const data = await res.json()
    setChatLog((prev) => [...prev, `🤖 ${data.output}`])
    setInput("")
    setLoading(false)
  }

  return (
    <>
      {/* Floating button */}
      <Button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 rounded-full h-12 w-12 p-0 shadow-lg z-50"
      >
        <MessageSquare className="h-5 w-5" />
      </Button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-[90vw] sm:w-96 bg-white border rounded-lg shadow-lg p-4 z-50">
          <div className="max-h-72 overflow-y-auto space-y-2 text-sm text-muted-foreground mb-4">
            {chatLog.map((msg, idx) => (
              <div key={idx}>{msg}</div>
            ))}
          </div>

          <div className="flex gap-2">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows={2}
              placeholder="Ask something about Divij..."
              className="resize-none"
            />
            <Button onClick={sendMessage} disabled={loading}>
              <SendHorizonal className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
