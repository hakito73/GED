using System.Windows;
using GedProvisioner.Core.Services;
using GedProvisioner.ViewModels;

namespace GedProvisioner;

public partial class App : Application
{
    protected override void OnStartup(StartupEventArgs e)
    {
        base.OnStartup(e);

        IConfigService configService = new ConfigService();
        INamingService namingService = new NamingService();

        var mainWindow = new MainWindow
        {
            DataContext = new MainViewModel(configService, namingService)
        };
        mainWindow.Show();
    }
}
