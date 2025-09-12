"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  ChevronDownIcon,
  CircleCheckIcon,
  CircleHelpIcon,
  CircleIcon,
  CloudIcon,
  CreditCardIcon,
  DownloadIcon,
  EditIcon,
  HeartIcon,
  KeyboardIcon,
  LifeBuoyIcon,
  LogOutIcon,
  MailIcon,
  MessageSquareIcon,
  PlusIcon,
  SettingsIcon,
  TrashIcon,
  UserIcon,
  UserPlusIcon,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "sonner";

export default function ComponentsPage() {
  // Checkbox state
  const [isChecked, setIsChecked] = useState(false);

  // Switch state
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  // Dropdown menu state
  const [showStatusBar, setShowStatusBar] = useState(true);
  const [showActivityBar, setShowActivityBar] = useState(false);
  const [position, setPosition] = useState("bottom");

  // Checkbox handler
  const handleCheckboxChange = (checked: boolean | "indeterminate") => {
    setIsChecked(checked === true);
  };

  return (
    <div className="bg-background flex min-h-screen justify-center p-8">
      <div className="flex max-w-4xl flex-col gap-24">
        <h1 className="text-4xl font-bold">UI Components</h1>

        {/* Buttons */}
        <Section title="Button">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-medium">Variants</h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="default">Default</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-medium">Sizes</h3>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">
                  <HeartIcon aria-label="Example heart icon button" />
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-medium">With Icons</h3>
              <div className="flex flex-wrap gap-3">
                <Button>
                  <DownloadIcon />
                  Download
                </Button>
                <Button variant="outline">
                  <EditIcon />
                  Edit
                </Button>
                <Button variant="destructive">
                  <TrashIcon />
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </Section>

        {/* Card */}
        <Section title="Card">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Basic Card</CardTitle>
                <CardDescription>A simple card example</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  This is the card content area where you can place any
                  information.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Card with Action</CardTitle>
                <CardDescription>Card with action button</CardDescription>
                <CardAction>
                  <Button
                    size="sm"
                    variant="outline"
                    aria-label="Example settings icon button"
                  >
                    <SettingsIcon />
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <p>This card demonstrates the action slot in the header.</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Action</Button>
              </CardFooter>
            </Card>
          </div>
        </Section>

        {/* Input & Label */}
        <Section title="Input & Label">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="disabled">Disabled Input</Label>
                <Input id="disabled" placeholder="Disabled input" disabled />
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="file">File Upload</Label>
                <Input id="file" type="file" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="search">Search</Label>
                <Input id="search" type="search" placeholder="Search..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="number">Number</Label>
                <Input id="number" type="number" placeholder="Enter a number" />
              </div>
            </div>
          </div>
        </Section>

        {/* Textarea */}
        <Section title="Textarea">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Type your message here..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="disabled-textarea">Disabled Textarea</Label>
              <Textarea
                id="disabled-textarea"
                placeholder="This textarea is disabled"
                disabled
              />
            </div>
          </div>
        </Section>

        {/* Select */}
        <Section title="Select">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Default Size</Label>
                <Select>
                  <SelectTrigger aria-label="Default select component example">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                    <SelectItem value="option3">Option 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Small Size</Label>
                <Select>
                  <SelectTrigger
                    size="sm"
                    aria-label="Small select component example"
                  >
                    <SelectValue placeholder="Small select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small1">Small Option 1</SelectItem>
                    <SelectItem value="small2">Small Option 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>With Icons</Label>
                <Select>
                  <SelectTrigger aria-label="Select with icons example">
                    <SelectValue placeholder="Select user type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">
                      <UserIcon />
                      Admin
                    </SelectItem>
                    <SelectItem value="user">
                      <UserIcon />
                      User
                    </SelectItem>
                    <SelectItem value="guest">
                      <UserIcon />
                      Guest
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Disabled Select</Label>
                <Select disabled>
                  <SelectTrigger aria-label="Disabled select component example">
                    <SelectValue placeholder="Disabled select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="disabled">{"Won't show"}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </Section>

        {/* Checkbox */}
        <Section title="Checkbox">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="checkbox1"
                checked={isChecked}
                onCheckedChange={handleCheckboxChange}
              />
              <Label htmlFor="checkbox1">Accept terms and conditions</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="checkbox2" defaultChecked />
              <Label htmlFor="checkbox2">Subscribe to newsletter</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="checkbox3" disabled />
              <Label htmlFor="checkbox3">Disabled checkbox</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="checkbox4" disabled defaultChecked />
              <Label htmlFor="checkbox4">Disabled checked checkbox</Label>
            </div>
          </div>
        </Section>

        {/* Switch */}
        <Section title="Switch">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch
                id="switch1"
                checked={isSwitchOn}
                onCheckedChange={setIsSwitchOn}
              />
              <Label htmlFor="switch1">Enable notifications</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="switch2" defaultChecked />
              <Label htmlFor="switch2">Dark mode</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="switch3" disabled />
              <Label htmlFor="switch3">Disabled switch</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="switch4" disabled defaultChecked />
              <Label htmlFor="switch4">Disabled checked switch</Label>
            </div>
          </div>
        </Section>

        {/* Dialog */}
        <Section title="Dialog">
          <div className="flex flex-wrap gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Confirm Action</DialogTitle>
                  <DialogDescription>
                    Are you sure you want to perform this action? This cannot be
                    undone.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button>Confirm</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </Section>

        {/* Separator */}
        <Section title="Separator">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-medium">Horizontal Separator</h3>
              <div className="space-y-2">
                <p>Content above</p>
                <Separator />
                <p>Content below</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-medium">Vertical Separator</h3>
              <div className="flex h-8 items-center space-x-4">
                <span>Left</span>
                <Separator orientation="vertical" />
                <span>Right</span>
              </div>
            </div>
          </div>
        </Section>

        {/* Toast (Sonner) */}
        <Section title="Toast">
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => toast("Default toast message")}>
              Default Toast
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.success("Success toast message")}
            >
              Success Toast
            </Button>
            <Button
              variant="destructive"
              onClick={() => toast.error("Error toast message")}
            >
              Error Toast
            </Button>
            <Button
              variant="secondary"
              onClick={() => toast.info("Info toast message")}
            >
              Info Toast
            </Button>
            <Button
              variant="ghost"
              onClick={() => toast.warning("Warning toast message")}
            >
              Warning Toast
            </Button>
          </div>
        </Section>

        {/* Dropdown Menu */}
        <Section title="Dropdown Menu">
          <div className="flex flex-wrap gap-6">
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-medium">Basic Dropdown</h3>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    Open Menu
                    <ChevronDownIcon className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <UserIcon />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CreditCardIcon />
                      Billing
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <SettingsIcon />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <KeyboardIcon />
                      Keyboard shortcuts
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOutIcon />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-medium">With Checkboxes</h3>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    View Options
                    <ChevronDownIcon className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem
                    checked={showStatusBar}
                    onCheckedChange={setShowStatusBar}
                  >
                    Status Bar
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={showActivityBar}
                    onCheckedChange={setShowActivityBar}
                    disabled
                  >
                    Activity Bar
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-medium">With Radio Group</h3>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    Panel Position
                    <ChevronDownIcon className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={position}
                    onValueChange={setPosition}
                  >
                    <DropdownMenuRadioItem value="top">
                      Top
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="bottom">
                      Bottom
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="right">
                      Right
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-medium">With Submenu</h3>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    Actions
                    <ChevronDownIcon className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuItem>
                    <UserIcon />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCardIcon />
                    Billing
                  </DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <UserPlusIcon />
                      Invite users
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>
                        <MailIcon />
                        Email
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <MessageSquareIcon />
                        Message
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <PlusIcon />
                        More...
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <CloudIcon />
                    API
                  </DropdownMenuItem>
                  <DropdownMenuItem disabled>
                    <LifeBuoyIcon />
                    Support
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOutIcon />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </Section>

        {/* Navigation Menu */}
        <Section title="Navigation Menu">
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/"
                          className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium">
                            shadcn/ui
                          </div>
                          <p className="text-muted-foreground text-sm leading-tight">
                            Beautifully designed components built with Tailwind
                            CSS.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="Introduction">
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Installation">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="Typography"
                    >
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {navigationMenuMockComponentData.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/docs">Docs</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>List</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="#">
                          <div className="font-medium">Components</div>
                          <div className="text-muted-foreground">
                            Browse all components in the library.
                          </div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="#">
                          <div className="font-medium">Documentation</div>
                          <div className="text-muted-foreground">
                            Learn how to use the library.
                          </div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="#">
                          <div className="font-medium">Blog</div>
                          <div className="text-muted-foreground">
                            Read our latest blog posts.
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="#">Components</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="#">Documentation</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="#">Blocks</Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="#" className="flex-row items-center gap-2">
                          <CircleHelpIcon />
                          Backlog
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="#" className="flex-row items-center gap-2">
                          <CircleIcon />
                          To Do
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="#" className="flex-row items-center gap-2">
                          <CircleCheckIcon />
                          Done
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </Section>
      </div>
    </div>
  );
}

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => (
  <div className="flex flex-col gap-6">
    <h2 className="text-3xl font-semibold">{title}</h2>
    <Separator />
    {children}
  </div>
);

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

const navigationMenuMockComponentData: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];
