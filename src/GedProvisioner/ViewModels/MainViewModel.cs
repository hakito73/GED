using GedProvisioner.Core.Services;

namespace GedProvisioner.ViewModels;

public class MainViewModel : ViewModelBase
{
    private readonly IConfigService _configService;
    private readonly INamingService _namingService;

    public MainViewModel(IConfigService configService, INamingService namingService)
    {
        _configService = configService;
        _namingService = namingService;
        Title = _namingService.GenerateName();
    }

    private string _title = string.Empty;
    public string Title
    {
        get => _title;
        set
        {
            if (_title != value)
            {
                _title = value;
                OnPropertyChanged();
            }
        }
    }
}
