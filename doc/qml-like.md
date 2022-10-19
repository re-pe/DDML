[Atgal](qml.md) <!-- markdownlint-disable-line MD041 -->

# QML sintaksė

[Šaltinis](https://github.com/AvaloniaUI/Avalonia/issues/3735)

## XAML

```xml
<UserControl xmlns="https://github.com/avaloniaui"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             x:Class="ControlCatalog.Pages.ButtonPage">
    <StackPanel Orientation="Vertical" Spacing="4">
    <TextBlock Classes="h1">Button</TextBlock>
    <TextBlock Classes="h2">A button control</TextBlock>
    <StackPanel Orientation="Horizontal"
                Margin="0,16,0,0"
                HorizontalAlignment="Center"
                Spacing="16">
      <StackPanel Orientation="Vertical" Spacing="8" Width="150">
        <Button>Button</Button>
        <Button Foreground="White">Foreground</Button>
        <Button Background="{DynamicResource ThemeAccentBrush}">Background</Button>
        <Button IsEnabled="False">Disabled</Button>
        <Button Content="Re-themed">
          <Button.Styles>
            <Style>
              <Style.Resources>
                <SolidColorBrush x:Key="ThemeBorderMidBrush">Red</SolidColorBrush>
                <SolidColorBrush x:Key="ThemeControlHighBrush">DarkRed</SolidColorBrush>
              </Style.Resources>
            </Style>
          </Button.Styles>          
        </Button>
      </StackPanel>
      <StackPanel Orientation="Vertical" Spacing="8" Width="150">
        <Button BorderThickness="0">No Border</Button>
        <Button BorderBrush="{DynamicResource ThemeAccentBrush}">Border Color</Button>
        <Button BorderBrush="{DynamicResource ThemeAccentBrush}" BorderThickness="4">Thick Border</Button>
        <Button BorderBrush="{DynamicResource ThemeAccentBrush}" BorderThickness="4" IsEnabled="False">Disabled</Button>
      </StackPanel>
    </StackPanel>    
  </StackPanel>
</UserControl>
```

## QML

```qml
@UserControl
@Class ControlCatalog.Pages.ButtonPage

StackPanel {
    Orientation:"Vertical" 
    Spacing:"4"
    TextBlock{Classes:"h1" Text:"Button"}
    TextBlock{Classes:"h2" Text:"A button control"}
    StackPanel{
        Orientation:"Horizontal"
        Margin:"0,16,0,0"
        HorizontalAlignment:"Center"
        Spacing:"16"
        StackPanel{
            Orientation:"Vertical" Spacing:"8" Width:"150"
            Button{Text: "Button"}
            Button{Foreground:"White" Text:"Foreground"}
            Button{Background:"@ThemeAccentBrush" Text:"Background"}
            Button{IsEnabled:"False" Text:"Disabled"}
            Button{
                Text:"Re-themed"
                Style.Resources {
                    SolidColorBrush {ThemeBorderMidBrush:"Red"}
                    SolidColorBrush {ThemeControlHighBrush:"DarkRed"}
                }
            }
        }
        StackPanel{
            Orientation:"Vertical" Spacing:"8" Width:"150"
            Button {BorderThickness:"0" Text:"No Border"}
            Button {BorderBrush:"@ThemeAccentBrush" Text:"Border Color"}
            Button {BorderBrush:"@ThemeAccentBrush" BorderThickness:"4" Text:"Thick Border"}
            Button {BorderBrush:"@ThemeAccentBrush" BorderThickness:"4" IsEnabled:"False" Text:"Disabled"}
        }
    }   
}
```

[Atgal](qml.md)
