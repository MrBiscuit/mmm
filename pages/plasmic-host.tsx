import { PlasmicCanvasHost, registerComponent } from "@plasmicapp/host";
import {
  AspectRatio,
  Image,
  Button,
  ButtonGroup,
  ChakraProvider,
  Checkbox,
  CheckboxGroup,
  Stack,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  PinInput,
  PinInputField,
  Radio,
  RadioGroup,
  Code,
  Divider,
  Kbd,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Switch,
  Badge,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";

registerComponent(Image, {
  name: "Image",
  importPath: "@chakra-ui/react",
  props: {
    src: {
      type: "string",
      defaultValue: "https://bit.ly/naruto-sage",
    },
    fallbackSrc: {
      type: "string",
      defaultValue: "https://via.placeholder.com/150",
    },
    alt: {
      type: "string",
      defaultValueHint: "name of the image",
    },
    loading: {
      type: "choice",
      options: ["lazy", "eager"],
    },
  },
});
registerComponent(AspectRatio, {
  name: "AspectRatio",
  importPath: "@chakra-ui/react",
  defaultStyles: {
    width: "320px",
  },
  props: {
    ratio: {
      type: "number",
      defaultValue: 1.333,
    },
    children: {
      type: "slot",
      defaultValue: {
        type: "component",
        name: "Image",
      },
    },
  },
});

registerComponent(ButtonGroup, {
  name: "ButtonGroup",
  importPath: "@chakra-ui/react",
  props: {
    colorScheme: {
      type: "choice",
      options: [
        "whiteAlpha",
        "blackAlpha",
        "gray",
        "red",
        "orange",
        "yellow",
        "green",
        "teal",
        "blue",
        "cyan",
        "purple",
        "pink",
        "linkedin",
        "facebook",
        "messenger",
        "whatsapp",
        "twitter",
        "telegram",
      ],
    },
    size: {
      type: "choice",
      options: ["xl", "sm", "md", "lg"],
      defaultValue: "md",
    },
    isAttached: {
      type: "boolean",
      defaultValue: false,
    },
    isDisabled: {
      type: "boolean",
      defaultValue: false,
    },
    spacing: {
      type: "string",
      defaultValue: "0.5rem",
    },
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "component",
          name: "Button",
          props: {
            children: {
              type: "text",
              value: "Button 1",
            },
          },
        },
        {
          type: "component",
          name: "Button",
          props: {
            children: {
              type: "text",
              value: "Button 2",
            },
          },
        },
      ],
    },
  },
});

registerComponent(Button, {
  name: "Button",
  importPath: "@chakra-ui/react",
  parentComponentName: "ButtonGroup",
  props: {
    size: {
      type: "choice",
      options: ["xl", "sm", "md", "lg"],
    },
    variant: {
      type: "choice",
      options: ["ghost", "outline", "solid", "link", "unstyled"],
      defaultValue: "solid",
    },
    colorScheme: {
      type: "choice",
      options: [
        "whiteAlpha",
        "blackAlpha",
        "gray",
        "red",
        "orange",
        "yellow",
        "green",
        "teal",
        "blue",
        "cyan",
        "purple",
        "pink",
        "linkedin",
        "facebook",
        "messenger",
        "whatsapp",
        "twitter",
        "telegram",
      ],
    },
    iconSpacing: "number",
    isActive: {
      type: "boolean",
    },
    isDisabled: {
      type: "boolean",
    },
    isLoading: {
      type: "boolean",
    },
    children: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Button",
      },
    },
  },
});

registerComponent(Stack, {
  name: "Stack",
  importPath: "@chakra-ui/react",
  props: {
    direction: {
      type: "choice",
      options: ["row", "column"],
    },
    align: {
      type: "choice",
      options: ["start", "center", "end", "stretch"],
    },
    justify: {
      type: "choice",
      options: ["start", "center", "end", "stretch"],
    },
    spacing: {
      type: "number",
      defaultValue: 8,
    },
    divider: {
      type: "choice",
      options: ["none", "full", "vertical", "horizontal"],
    },
    wrap: {
      type: "choice",
      options: ["wrap", "nowrap"],
    },
    children: {
      type: "slot",
    },
  },
});

registerComponent(Checkbox, {
  name: "Checkbox",
  importPath: "@chakra-ui/react",
  parentComponentName: "CheckboxGroup",
  props: {
    colorScheme: {
      type: "choice",
      options: [
        "whiteAlpha",
        "blackAlpha",
        "gray",
        "red",
        "orange",
        "yellow",
        "green",
        "teal",
        "blue",
        "cyan",
        "purple",
        "pink",
        "linkedin",
        "facebook",
        "messenger",
        "whatsapp",
        "twitter",
        "telegram",
      ],
      defaultValue: "blue",
    },
    size: {
      type: "choice",
      options: ["xl", "sm", "md", "lg"],
    },
    value: {
      type: "string",
    },
    spacing: {
      type: "string",
      defaultValue: "0.5rem",
    },
    isChecked: {
      type: "boolean",
    },
    isIndeterminate: {
      type: "boolean",
    },
    isDisabled: {
      type: "boolean",
    },
    isRequired: {
      type: "boolean",
    },
    isInvalid: {
      type: "boolean",
    },
    children: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Checkbox",
      },
    },
  },
});

registerComponent(CheckboxGroup, {
  name: "CheckboxGroup",
  importPath: "@chakra-ui/react",
  props: {
    size: {
      type: "choice",
      options: ["xl", "sm", "md", "lg"],
      defaultValue: "md",
    },
    isDisabled: {
      type: "boolean",
    },
    children: {
      type: "slot",
      allowedComponents: ["Checkbox", "Stack"],
      defaultValue: [
        {
          type: "component",
          name: "Checkbox",
          props: {
            value: "1",
            children: {
              type: "text",
              value: "Checkbox 1",
            },
          },
        },
        {
          type: "component",
          name: "Checkbox",
          props: {
            value: "2",
            children: {
              type: "text",
              value: "Checkbox 2",
            },
          },
        },
        {
          type: "component",
          name: "Checkbox",
          props: {
            value: "3",
            children: {
              type: "text",
              value: "Checkbox 3",
            },
          },
        },
      ],
    },
  },
});

registerComponent(Input, {
  name: "Input",
  importPath: "@chakra-ui/react",
  props: {
    size: {
      type: "choice",
      options: ["xl", "sm", "md", "lg"],
    },
    variant: {
      type: "choice",
      options: ["outline", "filled", "flushed", "unstyled"],
    },
    isDisabled: {
      type: "boolean",
    },
    isInvalid: {
      type: "boolean",
    },
    isReadOnly: {
      type: "boolean",
    },
    isRequired: {
      type: "boolean",
    },
    errorBorderColor: {
      type: "string",
      defaultValue: "red.500",
    },
    focusBorderColor: {
      type: "string",
      defaultValue: "blue.500",
    },
  },
});
registerComponent(NumberInputField, {
  name: "NumberInputField",
  importPath: "@chakra-ui/react",
  parentComponentName: "NumberInput",
  props: {},
});

registerComponent(NumberIncrementStepper, {
  name: "NumberIncrementStepper",
  importPath: "@chakra-ui/react",
  parentComponentName: "NumberInputStepper",
  props: {},
});

registerComponent(NumberDecrementStepper, {
  name: "NumberDecrementStepper",
  importPath: "@chakra-ui/react",
  parentComponentName: "NumberInputStepper",
  props: {},
});

registerComponent(NumberInputStepper, {
  name: "NumberInputStepper",
  importPath: "@chakra-ui/react",
  parentComponentName: "NumberInput",
  props: {
    children: {
      type: "slot",
      allowedComponents: ["NumberIncrementStepper", "NumberDecrementStepper"],
      defaultValue: [
        {
          type: "component",
          name: "NumberIncrementStepper",
        },
        {
          type: "component",
          name: "NumberDecrementStepper",
        },
      ],
    },
  },
});

registerComponent(NumberInput, {
  name: "NumberInput",
  importPath: "@chakra-ui/react",
  props: {
    size: {
      type: "choice",
      options: ["xl", "sm", "md", "lg"],
    },
    variant: {
      type: "choice",
      options: ["outline", "filled", "flushed", "unstyled"],
    },
    inputMode: {
      type: "choice",
      options: [
        "text",
        "search",
        "none",
        "tel",
        "url",
        "email",
        "numeric",
        "decimal",
      ],
    },
    format: {
      type: "string",
    },
    step: {
      type: "number",
    },
    precision: {
      type: "number",
    },
    max: {
      type: "number",
    },
    min: {
      type: "number",
    },
    errorBorderColor: {
      type: "string",
      defaultValue: "red.500",
    },
    focusBorderColor: {
      type: "string",
      defaultValue: "blue.500",
    },
    allowMouseWheel: {
      type: "boolean",
    },
    isDisabled: {
      type: "boolean",
    },
    isInvalid: {
      type: "boolean",
    },
    isReadOnly: {
      type: "boolean",
    },
    isRequired: {
      type: "boolean",
    },

    children: {
      type: "slot",
      defaultValue: [
        {
          type: "component",
          name: "NumberInputField",
        },
        {
          type: "component",
          name: "NumberInputStepper",
        },
      ],
    },
  },
});

registerComponent(PinInputField, {
  name: "PinInputField",
  importPath: "@chakra-ui/react",
  parentComponentName: "PinInput",
  props: {},
});

registerComponent(PinInput, {
  name: "PinInput",
  importPath: "@chakra-ui/react",
  props: {
    size: {
      type: "choice",
      options: ["xl", "sm", "md", "lg"],
    },
    type: {
      type: "choice",
      options: ["number", "alphanumeric"],
    },
    variant: {
      type: "choice",
      options: ["outline", "filled", "flushed", "unstyled"],
    },
    mask: {
      type: "boolean",
      description:
        "Whether the pin input's value should be masked like `type=password`.",
    },
    manageFocus: {
      type: "boolean",
      defaultValue: true,
      description:
        "Whether the pin input should move automatically to the next input once filled.",
    },
    autoFocus: {
      type: "boolean",
      description: "Whether the pin input should be focused on mount.",
    },
    opt: {
      type: "boolean",
      description: "autocomplete=`one-time-code`",
    },
    errorBorderColor: {
      type: "string",
      defaultValue: "red.500",
    },
    focusBorderColor: {
      type: "string",
      defaultValue: "blue.500",
    },
    isDisabled: {
      type: "boolean",
    },
    isInvalid: {
      type: "boolean",
    },

    children: {
      type: "slot",
      allowedComponents: ["PintInputField"],
      defaultValue: [
        {
          type: "component",
          name: "PinInputField",
        },
        {
          type: "component",
          name: "PinInputField",
        },
        {
          type: "component",
          name: "PinInputField",
        },
        {
          type: "component",
          name: "PinInputField",
        },
      ],
    },
  },
});
registerComponent(Radio, {
  name: "Radio",
  importPath: "@chakra-ui/react",
  parentComponentName: "RadioGroup",
  props: {
    value: {
      type: "string",
    },
    size: {
      type: "choice",
      options: ["xl", "sm", "md", "lg"],
    },
    spacing: {
      type: "string",
      defaultValue: "0.5rem",
    },
    isChecked: {
      type: "boolean",
    },
    isDisabled: {
      type: "boolean",
    },
    isInvalid: {
      type: "boolean",
    },
    isReadOnly: {
      type: "boolean",
    },
    isRequired: {
      type: "boolean",
    },
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "text",
          value: "Radio",
        },
      ],
    },
  },
});

registerComponent(RadioGroup, {
  name: "RadioGroup",
  importPath: "@chakra-ui/react",
  props: {
    value: {
      type: "string",
    },
    size: {
      type: "choice",
      options: ["xl", "sm", "md", "lg"],
    },
    isDisabled: {
      type: "boolean",
    },
    isInvalid: {
      type: "boolean",
    },
    isReadOnly: {
      type: "boolean",
    },
    isRequired: {
      type: "boolean",
    },
    children: {
      type: "slot",
      defaultValue: {
        type: "hbox",

        styles: {
          gap: "12px",
        },
        children: [
          {
            type: "component",
            name: "Radio",
            props: { value: "1", children: { type: "text", value: "Radio 1" } },
          },
          {
            type: "component",
            name: "Radio",
            props: { value: "2", children: { type: "text", value: "Radio 2" } },
          },
          {
            type: "component",
            name: "Radio",
            props: { value: "3", children: { type: "text", value: "Radio 3" } },
          },
        ],
      },
    },
  },
});
registerComponent(Divider, {
  name: "Divider",
  importPath: "@chakra-ui/react",
  props: {
    orientation: {
      type: "choice",
      options: ["vertical", "horizontal"],
    },
    variant: {
      type: "choice",
      options: ["solid", "dashed"],
    },
  },
});

registerComponent(Code, {
  name: "Code",
  importPath: "@chakra-ui/react",
  props: {
    colorScheme: {
      type: "choice",
      options: [
        "whiteAlpha",
        "blackAlpha",
        "gray",
        "red",
        "orange",
        "yellow",
        "green",
        "teal",
        "blue",
        "cyan",
        "purple",
        "pink",
        "linkedin",
        "facebook",
        "messenger",
        "whatsapp",
        "twitter",
        "telegram",
      ],
      defaultValue: "gray",
    },
    variant: {
      type: "choice",
      options: ["solid", "subtle", "outline"],
      defaultValue: "subtle",
    },
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "text",
          value: "Code",
        },
      ],
    },
  },
});

registerComponent(Kbd, {
  name: "Kbd",
  importPath: "@chakra-ui/react",
  props: {
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "text",
          value: "⌘",
        },
      ],
    },
  },
});
registerComponent(StatLabel, {
  name: "StatLabel",
  importPath: "@chakra-ui/react",
  parentComponentName: "Stat",
  props: {
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "text",
          value: "StatLabel",
        },
      ],
    },
  },
});

registerComponent(StatNumber, {
  name: "StatNumber",
  importPath: "@chakra-ui/react",
  parentComponentName: "Stat",
  props: {
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "text",
          value: "£345,670",
        },
      ],
    },
  },
});

registerComponent(StatArrow, {
  name: "StatArrow",
  importPath: "@chakra-ui/react",
  parentComponentName: "Stat",
  props: {
    type: {
      type: "choice",
      options: ["increase", "decrease"],
    },
  },
});

registerComponent(StatHelpText, {
  name: "StatHelpText",
  importPath: "@chakra-ui/react",
  parentComponentName: "Stat",
  props: {
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "text",
          value: "StatHelpText",
        },
      ],
    },
  },
});

registerComponent(Stat, {
  name: "Stat",
  importPath: "@chakra-ui/react",
  props: {
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "component",
          name: "StatLabel",
          props: { children: { type: "text", value: "Collected Fees" } },
        },
        {
          type: "component",
          name: "StatNumber",
          props: { children: { type: "text", value: "£345,670" } },
        },
        {
          type: "component",
          name: "StatHelpText",
          props: {
            children: {
              type: "hbox",
              styles: {
                alignItems: "center",
                padding: "0px",
              },
              children: [
                {
                  type: "component",
                  name: "StatArrow",
                  props: { type: "increase" },
                },
                { type: "text", value: "Last 7 days" },
              ],
            },
          },
        },
      ],
    },
  },
});
registerComponent(BreadcrumbItem, {
  name: "BreadcrumbItem",
  importPath: "@chakra-ui/react",
  parentComponentName: "Breadcrumb",
  props: {
    isCurrentPage: {
      type: "boolean",
    },
    isLastChild: {
      type: "boolean",
    },
    seperator: {
      type: "string",
      defaultValue: "/",
    },
    spacing: {
      type: "string",
      defaultValue: "8px",
    },
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "component",
          name: "BreadcrumbLink",
          props: {
            children: {
              type: "text",
              value: "BreadcrumbItem",
            },
          },
        },
      ],
    },
  },
});
registerComponent(BreadcrumbLink, {
  name: "BreadcrumbLink",
  importPath: "@chakra-ui/react",
  parentComponentName: "BreadcrumbItem",

  props: {
    href: {
      type: "string",
      defaultValue: "#",
    },
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "text",
          value: "Home",
        },
      ],
    },
  },
});
registerComponent(Breadcrumb, {
  name: "Breadcrumb",
  importPath: "@chakra-ui/react",
  props: {
    separator: {
      type: "string",
      defaultValue: "/",
    },
    spacing: {
      type: "string",
      defaultValue: "8px",
    },
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "component",
          name: "BreadcrumbItem",
          props: {
            children: {
              type: "component",
              name: "BreadcrumbLink",
              props: {
                children: {
                  type: "text",
                  value: "Home",
                },
              },
            },
          },
        },
        {
          type: "component",
          name: "BreadcrumbItem",
          props: {
            children: {
              type: "component",
              name: "BreadcrumbLink",
              props: {
                children: {
                  type: "text",
                  value: "Docs",
                },
              },
            },
          },
        },
        {
          type: "component",
          name: "BreadcrumbItem",
          props: {
            isLastChild: true,
            isCurrentPage: true,
            children: {
              type: "component",
              name: "BreadcrumbLink",
              props: {
                children: {
                  type: "text",
                  value: "Breadcrumb",
                },
              },
            },
          },
        },
      ],
    },
  },
});
registerComponent(BreadcrumbSeparator, {
  name: "BreadcrumbSeparator",
  importPath: "@chakra-ui/react",
  parentComponentName: "Breadcrumb",
  props: {
    children: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "/",
      },
    },
  },
});

registerComponent(Text, {
  name: "Text",
  importPath: "@chakra-ui/react",
  props: {
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "text",
          value: "Some Text",
        },
      ],
    },
  },
});

registerComponent(Table, {
  name: "Table",
  importPath: "@chakra-ui/react",
  parentComponentName: "TableContainer",
  props: {
    colorScheme: {
      type: "choice",
      options: [
        "whiteAlpha",
        "blackAlpha",
        "gray",
        "red",
        "orange",
        "yellow",
        "green",
        "teal",
        "blue",
        "cyan",
        "purple",
        "pink",
        "linkedin",
        "facebook",
        "messenger",
        "whatsapp",
        "twitter",
        "telegram",
      ],
      defaultValue: "gray",
    },
    size: {
      type: "choice",
      options: ["sm", "md", "lg"],
      defaultValue: "md",
    },
    variant: {
      type: "choice",
      options: ["simple", "striped", "unstyled"],
      defaultValue: "simple",
    },
    children: {
      type: "slot",
    },
  },
});

registerComponent(TableCaption, {
  name: "TableCaption",
  importPath: "@chakra-ui/react",
  parentComponentName: "Table",
  props: {
    placement: {
      type: "choice",
      options: ["top", "bottom"],
      defaultValue: "bottom",
    },
    children: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Imperial to metric conversion factors",
      },
    },
  },
});

registerComponent(Thead, {
  name: "Thead",
  importPath: "@chakra-ui/react",
  parentComponentName: "Table",
  props: {
    children: {
      type: "slot",
      allowedComponents: ["Th", "Tr"],
    },
  },
});

registerComponent(Tbody, {
  name: "Tbody",
  importPath: "@chakra-ui/react",
  parentComponentName: "Table",
  props: {
    children: {
      type: "slot",
      allowedComponents: ["Td", "Tr"],
    },
  },
});

registerComponent(Tr, {
  name: "Tr",
  importPath: "@chakra-ui/react",
  parentComponentName: "Table",
  props: {
    children: {
      type: "slot",
      allowedComponents: ["Td", "Th"],
    },
  },
});

registerComponent(Td, {
  name: "Td",
  importPath: "@chakra-ui/react",
  parentComponentName: "Tr",
  props: {
    isNumeric: "boolean",
    children: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Table Cell",
      },
    },
  },
});
registerComponent(Th, {
  name: "Th",
  importPath: "@chakra-ui/react",
  parentComponentName: "Tr",
  props: {
    isNumeric: "boolean",
    children: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Table Cell",
      },
    },
  },
});

registerComponent(TableContainer, {
  name: "TableContainer",
  importPath: "@chakra-ui/react",
  props: {
    overflowX: {
      type: "choice",
      options: ["auto", "scroll", "hidden", "visible"],
    },
    overflowY: {
      type: "choice",
      options: ["auto", "scroll", "hidden", "visible"],
    },
    whiteSpace: {
      type: "choice",
      options: ["normal", "nowrap", "pre", "pre-line", "pre-wrap"],
    },
    children: {
      type: "slot",
      allowedComponents: ["Table"],
      defaultValue: {
        type: "component",
        name: "Table",
        props: {
          children: [
            {
              type: "component",
              name: "Thead",
              props: {
                children: {
                  type: "component",
                  name: "Tr",
                  props: {
                    children: [
                      {
                        type: "component",
                        name: "Th",
                        props: {
                          children: {
                            type: "text",
                            value: "TO CONVERT",
                          },
                        },
                      },
                      {
                        type: "component",
                        name: "Th",
                        props: {
                          children: {
                            type: "text",
                            value: "INTO",
                          },
                        },
                      },
                      {
                        type: "component",
                        name: "Th",
                        props: {
                          children: {
                            type: "text",
                            value: "MULTIPLY BY",
                          },
                        },
                      },
                    ],
                  },
                },
              },
            },
            {
              type: "component",
              name: "Tbody",
              props: {
                children: [
                  {
                    type: "component",
                    name: "Tr",
                    props: {
                      children: [
                        {
                          type: "component",
                          name: "Td",
                          props: {
                            children: {
                              type: "text",
                              value: "inches",
                            },
                          },
                        },
                        {
                          type: "component",
                          name: "Td",
                          props: {
                            children: {
                              type: "text",
                              value: "millimetres (mm)",
                            },
                          },
                        },
                        {
                          type: "component",
                          name: "Td",
                          props: {
                            children: {
                              type: "text",
                              value: "25.4",
                            },
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    },
  },
});

registerComponent(TabList, {
  name: "TabList",
  importPath: "@chakra-ui/react",
  parentComponentName: "Tabs",
  props: {
    children: {
      type: "slot",
      allowedComponents: ["Tabs"],
    },
  },
});

registerComponent(Tabs, {
  name: "Tabs",
  importPath: "@chakra-ui/react",
  props: {
    align: {
      type: "choice",
      options: ["start", "center", "end"],
    },
    colorScheme: {
      type: "choice",
      options: [
        "whiteAlpha",
        "blackAlpha",
        "gray",
        "red",
        "orange",
        "yellow",
        "green",
        "teal",
        "blue",
        "cyan",
        "purple",
        "pink",
        "linkedin",
        "facebook",
        "messenger",
        "whatsapp",
        "twitter",
        "telegram",
      ],
    },
    orientation: {
      type: "choice",
      options: ["horizontal", "vertical"],
    },
    size: {
      type: "choice",
      options: ["sm", "md", "lg"],
    },
    variant: {
      type: "choice",
      options: [
        "line",
        "enclosed",
        "enclosed-colored",
        "soft-rounded",
        "solid-rounded",
        "unstyled",
      ],
      defaultValue: "line",
    },
    direction: {
      type: "choice",
      options: ["ltr", "rtl"],
    },
    index: {
      type: "number",
    },
    isFitted: "boolean",
    isLazy: "boolean",
    isManual: "boolean",
    children: {
      type: "slot",
      allowedComponents: ["TabList", "TabPanels"],
      defaultValue: [
        {
          type: "component",
          name: "TabList",
          props: {
            children: [
              {
                type: "component",
                name: "Tab",
                props: {
                  children: {
                    type: "text",
                    value: "Tab 1",
                  },
                },
              },
              {
                type: "component",
                name: "Tab",
                props: {
                  children: {
                    type: "text",
                    value: "Tab 2",
                  },
                },
              },
              {
                type: "component",
                name: "Tab",
                props: {
                  children: {
                    type: "text",
                    value: "Tab 3",
                  },
                },
              },
            ],
          },
        },
        {
          type: "component",
          name: "TabPanels",
          props: {
            children: [
              {
                type: "component",
                name: "TabPanel",
                props: {
                  children: {
                    type: "text",
                    value: "Tab 1's Panel Content",
                  },
                },
              },
              {
                type: "component",
                name: "TabPanel",
                props: {
                  children: {
                    type: "text",
                    value: "Tab 2's Panel Content",
                  },
                },
              },
              {
                type: "component",
                name: "TabPanel",
                props: {
                  children: {
                    type: "text",
                    value: "Tab 3's Panel Content",
                  },
                },
              },
            ],
          },
        },
      ],
    },
  },
});

registerComponent(Tab, {
  name: "Tab",
  importPath: "@chakra-ui/react",
  parentComponentName: "TabList",
  props: {
    id: "string",
    isDisabled: "boolean",
    panelId: "string",
    children: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Tab",
      },
    },
  },
});

registerComponent(TabPanels, {
  name: "TabPanels",
  importPath: "@chakra-ui/react",
  parentComponentName: "Tabs",
  props: {
    children: {
      type: "slot",
      allowedComponents: ["TabPanel"],
    },
  },
});

registerComponent(TabPanel, {
  name: "TabPanel",
  importPath: "@chakra-ui/react",
  parentComponentName: "TabPanels",
  props: {
    children: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Tab Panel Content",
      },
    },
  },
});
registerComponent(Switch, {
  name: "Switch",
  importPath: "@chakra-ui/react",
  props: {
    isChecked: "boolean",
    colorScheme: {
      type: "choice",
      options: [
        "whiteAlpha",
        "blackAlpha",
        "gray",
        "red",
        "orange",
        "yellow",
        "green",
        "teal",
        "blue",
        "cyan",
        "purple",
        "pink",
        "linkedin",
        "facebook",
        "messenger",
        "whatsapp",
        "twitter",
        "telegram",
      ],
      defaultValue: "blue",
    },
    size: {
      type: "choice",
      options: ["sm", "md", "lg"],
      defaultValue: "md",
    },
    spacing: {
      type: "string",
      defaultValue: "0.5rem",
    },
    id: "string",
    isDisabled: "boolean",
    isInvalid: "boolean",
    isReadOnly: "boolean",
    isRequired: "boolean",
  },
});

registerComponent(Badge, {
  name: "Badge",
  importPath: "@chakra-ui/react",
  props: {
    colorScheme: {
      type: "choice",
      options: [
        "whiteAlpha",
        "blackAlpha",
        "gray",
        "red",
        "orange",
        "yellow",
        "green",
        "teal",
        "blue",
        "cyan",
        "purple",
        "pink",
        "linkedin",
        "facebook",
        "messenger",
        "whatsapp",
        "twitter",
        "telegram",
      ],
      defaultValue: "gray",
    },
    variant: {
      type: "choice",
      options: ["solid", "subtle", "outline"],
      defaultValue: "subtle",
    },
  },
});

registerComponent(Popover, {
  name: "Popover",
  importPath: "@chakra-ui/react",
  props: {
    gutter: {
      type: "number",
      defaultValue: 8,
    },
    arrowPadding: "number",
    arrowShadowColor: {
      type: "string",
      defaultValue: "rgba(0, 0, 0, 0.15)",
    },
    arrowSize: {
      type: "number",
    },
    offset: {
      type: "array",
      defaultValue: [0, 0],
    },
    closeDelay: "number",
    orientation: {
      type: "choice",
      options: ["horizontal", "vertical"],
    },
    placement: {
      type: "choice",
      options: ["top", "bottom", "left", "right"],
      defaultValue: "bottom",
    },
    direction: {
      type: "choice",
      options: ["ltr", "rtl"],
      defaultValue: "ltr",
    },
    trigger: {
      type: "choice",
      options: ["click", "hover"],
      defaultValue: "click",
    },
    isLazy: {
      type: "boolean",
    },
    isOpen: {
      type: "boolean",
    },
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "component",
          name: "PopoverTrigger",
        },
        {
          type: "component",
          name: "PopoverContent",
        },
      ],
    },
  },
});

registerComponent(PopoverContent, {
  name: "PopoverContent",
  importPath: "@chakra-ui/react",
  props: {
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "component",
          name: "PopoverArrow",
        },
        {
          type: "component",
          name: "PopoverCloseButton",
        },
        {
          type: "component",
          name: "PopoverHeader",
          props: {
            children: {
              type: "text",
              value: "Confirmation!",
            },
          },
        },
        {
          type: "component",
          name: "PopoverBody",
          props: {
            children: {
              type: "text",
              value: "Are you sure you want to have that milkshake?",
            },
          },
        },
      ],
    },
  },
});
registerComponent(PopoverArrow, {
  name: "PopoverArrow",
  importPath: "@chakra-ui/react",
  props: {},
});
registerComponent(PopoverCloseButton, {
  name: "PopoverCloseButton",
  importPath: "@chakra-ui/react",
  props: {},
});
registerComponent(PopoverHeader, {
  name: "PopoverHeader",
  importPath: "@chakra-ui/react",
  props: {
    children: {
      type: "slot",
      defaultValue: {
        type: "text",
        defaultValue: "Confirmation!",
      },
    },
  },
});
registerComponent(PopoverBody, {
  name: "PopoverBody",
  importPath: "@chakra-ui/react",
  props: {
    children: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Are you sure you want to have that milkshake?",
      },
    },
  },
});

registerComponent(PopoverTrigger, {
  name: "PopoverTrigger",
  importPath: "@chakra-ui/react",
  props: {
    children: {
      type: "slot",
      defaultValue: {
        type: "component",
        name: "Button",
        props: {
          children: {
            type: "text",
            value: "Trigger",
          },
        },
      },
    },
  },
});

export default function PlasmicHost() {
  return (
    <div>
      <ChakraProvider>
        <PlasmicCanvasHost />
      </ChakraProvider>
    </div>
  );
}
