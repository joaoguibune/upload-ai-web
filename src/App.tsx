import { Github, FileVideo, Upload, Wand2 } from "lucide-react";

import { Button } from "./components/ui/button";
import { Textarea } from "./components/ui/textarea";
import { Separator } from "./components/ui/separator";
import { Label } from "./components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { Slider } from "./components/ui/slider";
export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ai</h1>
        <div>
          <Button variant="outline">
            <Github className="w-4 h-4 mr-2" />
            Github
          </Button>
        </div>
      </div>
      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Add the prompt for the AI..."
            />
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Generated result..."
              readOnly
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Tip: You can make use of the{" "}
            <code className="text-violet-400">{"{transcription}"}</code>{" "}
            variable in your prompt to incorporate the content of the selected
            video's transcription.
          </p>
        </div>
        <aside className="w-80 space-y-6">
          <form className="space-y-6">
            <label
              htmlFor="video"
              className="border flex 
              rounded-md aspect-video 
              cursor-pointer border-dashed 
              text-sm flex-col gap-2 items-center 
              justify-center text-white
              hover:bg-primary
              "
            >
              <FileVideo className="w-4 h-4" />
              Select video
            </label>
            <input
              type="file"
              id="video"
              accept="video/mp4"
              className="sr-only"
            />
            <Separator />
            <div className="space-y-2">
              <Label htmlFor="transcription_prompt">Transcription Prompt</Label>
              <Textarea
                id="transcription_prompt"
                className="h-20 leading-relaxed resize-none"
                placeholder="Add video keywords separated by commas (,)"
              />
            </div>
            <Button type="submit" className="w-full">
              Upload Video <Upload className="w-4 h-4 ml-2" />
            </Button>
          </form>
          <Separator />
          <form className="space-y-6">
            <div className="space-y-1">
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a prompt..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title">YouTube Title</SelectItem>
                  <SelectItem value="description">
                    Youtube Description
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Separator />
            <div className="space-y-1">
              <Label>IA Processor</Label>
              <Select defaultValue="gpt-35" disabled>
                <SelectTrigger>
                  <SelectValue></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt-35">GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs text-muted-foreground italic">
                You would be able to select different IAs soon.
              </span>
            </div>
            <Separator />

            <div className="space-y-2">
              <Label>Threshold</Label>
              <Slider min={0} max={1} step={0.1} />
              <span className="block text-xs text-muted-foreground italic leading-relaxed">
                Higher values might result in more creative results and might
                have some mistakes
              </span>
            </div>
            <Separator />
            <Button type="submit" className="w-full">
              Generate <Wand2 className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </aside>
      </main>
    </div>
  );
}
