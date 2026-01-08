import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Lock, User, Monitor, LogOut } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8 pb-20">
      
      {/* Page Header */}
      <div>
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Settings</h2>
        <p className="text-zinc-500">Manage your account settings and preferences.</p>
      </div>

      <Separator className="bg-zinc-200 dark:bg-zinc-800" />

      {/* 1. Profile Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-lg font-medium text-zinc-900 dark:text-white">
          <User className="h-5 w-5" />
          <h3>Profile</h3>
        </div>
        
        <Card className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
          <CardContent className="p-6 space-y-6">
            
            {/* Avatar Row */}
            <div className="flex items-center gap-6">
               <Avatar className="h-20 w-20">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
               </Avatar>
               <div className="space-y-2">
                 <Button variant="outline" size="sm">Change Avatar</Button>
                 <p className="text-xs text-zinc-500">JPG, GIF or PNG. 1MB max.</p>
               </div>
            </div>

            <Separator className="bg-zinc-100 dark:bg-zinc-800" />

            {/* Inputs Grid */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Display Name</Label>
                <Input id="name" defaultValue="Demo User" className="bg-zinc-50 dark:bg-zinc-950" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="@onyx_demo" className="bg-zinc-50 dark:bg-zinc-950" />
              </div>
            </div>

            <div className="space-y-2">
               <Label htmlFor="bio">Bio</Label>
               <Textarea 
                 id="bio" 
                 placeholder="Tell us a little bit about yourself" 
                 className="bg-zinc-50 dark:bg-zinc-950 resize-none h-24" 
               />
               <p className="text-[10px] text-zinc-500">This will be displayed on your public profile.</p>
            </div>
          </CardContent>
          <CardFooter className="bg-zinc-50/50 dark:bg-zinc-900/50 border-t border-zinc-100 dark:border-zinc-800 px-6 py-3 flex justify-end">
             <Button>Save Changes</Button>
          </CardFooter>
        </Card>
      </section>

      {/* 2. Appearance & Preferences */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-lg font-medium text-zinc-900 dark:text-white">
          <Monitor className="h-5 w-5" />
          <h3>Preferences</h3>
        </div>
        
        <Card className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
          <CardContent className="p-6 space-y-6">
            
            <div className="grid gap-4 md:grid-cols-2">
               <div className="space-y-2">
                 <Label>Currency</Label>
                 <Select defaultValue="usd">
                   <SelectTrigger className="bg-zinc-50 dark:bg-zinc-950">
                     <SelectValue placeholder="Select currency" />
                   </SelectTrigger>
                   <SelectContent>
                     <SelectItem value="usd">USD ($)</SelectItem>
                     <SelectItem value="eur">EUR (€)</SelectItem>
                     <SelectItem value="gbp">GBP (£)</SelectItem>
                   </SelectContent>
                 </Select>
                 <p className="text-[10px] text-zinc-500">This is the currency used throughout the dashboard.</p>
               </div>

               <div className="space-y-2">
                 <Label>Language</Label>
                 <Select defaultValue="en">
                   <SelectTrigger className="bg-zinc-50 dark:bg-zinc-950">
                     <SelectValue placeholder="Select language" />
                   </SelectTrigger>
                   <SelectContent>
                     <SelectItem value="en">English</SelectItem>
                     <SelectItem value="fr">French</SelectItem>
                     <SelectItem value="de">German</SelectItem>
                   </SelectContent>
                 </Select>
               </div>
            </div>

          </CardContent>
        </Card>
      </section>

      {/* 3. Notifications */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-lg font-medium text-zinc-900 dark:text-white">
          <Bell className="h-5 w-5" />
          <h3>Notifications</h3>
        </div>
        
        <Card className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
          <CardContent className="p-6 space-y-0 divide-y divide-zinc-100 dark:divide-zinc-800">
            
            <div className="flex items-center justify-between py-4 first:pt-0">
               <div className="space-y-0.5">
                 <Label className="text-base">Communication emails</Label>
                 <p className="text-sm text-zinc-500">Receive emails about your account activity.</p>
               </div>
               <Switch />
            </div>

            <div className="flex items-center justify-between py-4">
               <div className="space-y-0.5">
                 <Label className="text-base">Marketing emails</Label>
                 <p className="text-sm text-zinc-500">Receive emails about new products, features, and more.</p>
               </div>
               <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between py-4 last:pb-0">
               <div className="space-y-0.5">
                 <Label className="text-base">Security alerts</Label>
                 <p className="text-sm text-zinc-500">Receive emails about your account security.</p>
               </div>
               <Switch defaultChecked disabled />
            </div>

          </CardContent>
        </Card>
      </section>

       {/* 4. Danger Zone */}
       <section className="space-y-6">
        <div className="flex items-center gap-2 text-lg font-medium text-rose-600">
          <Lock className="h-5 w-5" />
          <h3>Danger Zone</h3>
        </div>
        
        <Card className="bg-red-50 dark:bg-red-950/10 border-red-200 dark:border-red-900/50">
          <CardContent className="p-6 flex items-center justify-between">
            <div className="space-y-1">
               <h4 className="font-medium text-red-900 dark:text-red-200">Delete Account</h4>
               <p className="text-sm text-red-600/80 dark:text-red-300/60">
                 Permanently remove your Personal Account and all of its contents.
               </p>
            </div>
            <Button variant="destructive">Delete Account</Button>
          </CardContent>
        </Card>
      </section>

      <div className="flex justify-center pt-8">
         <Button variant="ghost" className="text-zinc-500 gap-2">
            <LogOut className="h-4 w-4" /> Log out
         </Button>
      </div>

    </div>
  );
}