
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/components/ThemeProvider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated successfully.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container px-4 py-6">
        <h1 className="text-4xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground mb-8">
          Customize your MoodMix experience
        </p>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Appearance</CardTitle>
                  <CardDescription>
                    Customize the look and feel of the application
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="dark-mode">Dark Mode</Label>
                      <p className="text-sm text-muted-foreground">
                        Toggle between light and dark theme
                      </p>
                    </div>
                    <Switch
                      id="dark-mode"
                      checked={theme === "dark"}
                      onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="system-theme">Use System Theme</Label>
                      <p className="text-sm text-muted-foreground">
                        Follow your system's theme settings
                      </p>
                    </div>
                    <Switch
                      id="system-theme"
                      checked={theme === "system"}
                      onCheckedChange={(checked) => {
                        if (checked) setTheme("system");
                        else setTheme("light");
                      }}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleSave}>Save Changes</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>
                    Manage your notification preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="recommendations">Recommendations</Label>
                      <p className="text-sm text-muted-foreground">
                        Notify when new recommendations are available
                      </p>
                    </div>
                    <Switch id="recommendations" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="newsletter">Newsletter</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive weekly newsletter with top recommendations
                      </p>
                    </div>
                    <Switch id="newsletter" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleSave}>Save Changes</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Account Preferences</CardTitle>
                <CardDescription>
                  Manage your account settings and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="email">Email Address</Label>
                  <p className="text-sm text-muted-foreground">
                    Your email is used for account recovery and notifications
                  </p>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <p className="text-sm text-muted-foreground">
                    Last changed 3 months ago
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Reset Preferences</Button>
                <Button onClick={handleSave}>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="recommendations">
            <Card>
              <CardHeader>
                <CardTitle>Recommendation Preferences</CardTitle>
                <CardDescription>
                  Customize how recommendations are generated for you
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="diversity">Content Diversity</Label>
                    <p className="text-sm text-muted-foreground mb-2">
                      Adjust how varied your recommendations will be
                    </p>
                    <Slider
                      id="diversity"
                      defaultValue={[70]}
                      max={100}
                      step={10}
                      className="w-full"
                    />
                    <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                      <span>Similar to history</span>
                      <span>More diverse</span>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="frequency">Content Categories</Label>
                    <p className="text-sm text-muted-foreground mb-4">
                      Set your preferred balance of content types
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <Label htmlFor="movies">Movies</Label>
                          <span className="text-sm text-muted-foreground">60%</span>
                        </div>
                        <Slider id="movies" defaultValue={[60]} max={100} step={5} />
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <Label htmlFor="music">Music</Label>
                          <span className="text-sm text-muted-foreground">30%</span>
                        </div>
                        <Slider id="music" defaultValue={[30]} max={100} step={5} />
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <Label htmlFor="youtube">YouTube</Label>
                          <span className="text-sm text-muted-foreground">10%</span>
                        </div>
                        <Slider id="youtube" defaultValue={[10]} max={100} step={5} />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleSave}>Save Preferences</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
